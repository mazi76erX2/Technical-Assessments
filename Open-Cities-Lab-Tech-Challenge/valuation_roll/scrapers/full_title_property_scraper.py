from selenium import webdriver
from selenium.webdriver.firefox.options import Options as FirefoxOptions
from selenium.webdriver.firefox.webdriver import WebDriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.support.ui import Select
from selenium.common.exceptions import (
    TimeoutException,
    NoSuchElementException,
    ElementClickInterceptedException,
)
from typing import List, Optional


def setup_driver() -> WebDriver:
    firefox_options = FirefoxOptions()
    firefox_options.add_argument("--headless")
    return webdriver.Firefox(options=firefox_options)


def wait_and_select(
    driver: WebDriver, frame_name: str, element_id: str, value: str, wait_time: int = 10
) -> None:
    # Switch to the specified frame
    print(driver.page_source)
    print("switching to frame", frame_name)
    driver.switch_to.frame(frame_name)

    print(driver.page_source)
    print("Look for element", element_id)
    element = WebDriverWait(driver, wait_time).until(
        EC.presence_of_element_located((By.ID, element_id))
    )
    print("select option", value)
    Select(element).select_by_value(value)


def wait_and_click(driver: WebDriver, element_id: str, wait_time: int = 10) -> None:
    # Switch to the specified frame
    print("waiting for element to be clickable")
    element = WebDriverWait(driver, wait_time).until(
        EC.element_to_be_clickable((By.ID, element_id))
    )
    print("clicking element")
    element.click()


def scrape_table(
    driver: WebDriver, frame_name: str, table_id: str, wait_time: int = 10
) -> List[List[str]]:
    driver.switch_to.frame(frame_name)
    table = WebDriverWait(driver, wait_time).until(
        EC.presence_of_element_located((By.ID, table_id))
    )
    rows = table.find_elements(By.TAG_NAME, "tr")
    data = [
        [col.text for col in row.find_elements(By.TAG_NAME, "td")] for row in rows[1:]
    ]  # Skip header row
    driver.switch_to.default_content()
    return data


def main() -> None:
    driver: Optional[WebDriver] = None
    try:
        driver = setup_driver()
        driver.get("https://valuation2017.durban.gov.za/")
        # Interact with elements in the topFrame
        print("Interacting with elements in the topFrame")
        # print(driver.page_source)
        wait_and_select(
            driver,
            "mainFrame",
            "drpSearchType",
            "1",
        )
        print("Selected Full Title Property")
        wait_and_click(driver, "btnGo")
        print("Clicked Go")
        wait_and_select(driver, "frameSearch", "drpSuburbs", "22136")
        print("Selected suburb")
        wait_and_click(driver, "btnSearch")
        print("Clicked Search")
        # Scrape from the table (still in topFrame)
        table_data = scrape_table(driver, "frameSearch", "searchResultTable")
        for row in table_data:
            print(row)  # Process or store the data as needed
    except (
        TimeoutException,
        NoSuchElementException,
        ElementClickInterceptedException,
        Exception,
    ) as e:
        print(f"Error: {e}")
    finally:
        if driver:
            driver.quit()


if __name__ == "__main__":
    main()
