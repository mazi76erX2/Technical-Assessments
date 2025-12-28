# Stage 1: Build environment (slim)
FROM python:3.12.4-slim-bullseye AS builder

# Set timezone
ENV TZ=UTC+2
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone

# Install system dependencies
RUN apt-get update && apt-get install -y libpq5 build-essential \
    libpq-dev curl wget gnupg unzip software-properties-common

# Install system dependencies and software-properties-common
RUN apt-get update && apt-get install -y \
    python3-apt \
    software-properties-common \
    wget \
    unzip

# Add Mozilla's PPA for Firefox ESR
RUN add-apt-repository ppa:mozillateam/ppa -y && \
    apt-get update

# Install Firefox ESR
RUN apt-get install -y firefox-esr

# Install geckodriver
RUN FIREFOX_VERSION=`firefox-esr --version | head -n1 | cut -d' ' -f3` && \
    GECKODRIVER_VERSION=`curl -s https://api.github.com/repos/mozilla/geckodriver/releases/latest | grep -Po '"tag_name": "\K.*?(?=")'` && \
    wget https://github.com/mozilla/geckodriver/releases/download/$GECKODRIVER_VERSION/geckodriver-$GECKODRIVER_VERSION-linux64.tar.gz && \
    tar -zxf geckodriver-$GECKODRIVER_VERSION-linux64.tar.gz -C /usr/local/bin && \
    rm geckodriver-$GECKODRIVER_VERSION-linux64.tar.gz && \
    chmod +x /usr/local/bin/geckodriver

# # Install Chrome
# RUN wget -q -O - https://dl-ssl.google.com/linux/linux_signing_key.pub |\ 
#     gpg --dearmor -o /usr/share/keyrings/googlechrome-linux-keyring.gpg
# RUN echo "deb [arch=amd64 signed-by=/usr/share/keyrings/googlechrome-linux-keyring.gpg] \
#           http://dl.google.com/linux/chrome/deb/ stable main" |\
#           tee /etc/apt/sources.list.d/google-chrome.list
# RUN apt-get update && apt-get install -y google-chrome-stable=126.0.6478.126-1

# # Install matching ChromeDriver
# RUN CHROMEDRIVER_VERSION=126.0.6478.126 && \
#     wget -q https://chromedriver.storage.googleapis.com/$CHROMEDRIVER_VERSION/chromedriver_linux64.zip && \
#     unzip chromedriver_linux64.zip -d /usr/bin && \
#     rm chromedriver_linux64.zip && \
#     chmod +x /usr/bin/chromedriver

# Install tools
RUN pip3 install --progress-bar off --upgrade pip

# Stage 2: Application build (smaller)
FROM python:3.12.4-slim AS app

# Install Pipenv, copy Pipfile and Pipfile.lock for dependency installation
RUN pip3 install --progress-bar off pipenv
COPY Pipfile Pipfile.lock ./

# Install dependencies based on Pipfile
WORKDIR /app
RUN pipenv install --system --deploy

# Copy application code
COPY . .

# Stage 3: Final image (production-ready)
FROM app AS final

# Install development dependencies
RUN pipenv install --dev

# Set up the entrypoint script
COPY docker/backend/entrypoint.sh /entrypoint.sh
RUN sed -i 's/\r$//g' /entrypoint.sh
RUN chmod +x /entrypoint.sh
ENTRYPOINT ["/entrypoint.sh"]
