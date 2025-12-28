from abc import ABCMeta, abstractmethod
import csv
import os

class Lotto(object):
    """Base class for lotto objects.
    """
    __metaclass__ = ABCMeta

    def __init__(self):
        return

    @abstractmethod
    def set_ball_sets(self):
        return

    @abstractmethod
    def __str__(self):
        return ""

    @abstractmethod
    def parse_all_results_files(self):
        return

    @abstractmethod
    def parse_all_tickets_files(self):
        return


class LottoCountry(Lotto):
    """Class for each countries lottery.

    :param country: Name of country.
    :param self.main_ball_set_number: Number of balls in main ball set.
    :param main_ball_set_range: Range of balls in main ball set.
    :param self.second_ball_set_number: Number of balls in second ball set.
    :param second_ball_set_range: Range of balls in second ball set. If there isnt a second ball
     set then this value must be 0.
    :param self.third_ball_set_number: Number of balls in third ball set.
    :param third_ball_set_range: Range of balls in third ball set. If there isnt a third ball
     set then this value must be 0.
    :param lottoResults: Dictionary with all the lottery results of the country

    :type country: str
    :type self.main_ball_set_number: int
    :type main_ball_set_range: int
    :type self.second_ball_set_number: int
    :type second_ball_set_range: int
    :type self.third_ball_set_number: int
    :type third_ball_set_range: int
    :type lottoResults: dict
    """
    def __init__(self,
                 country,
                 main_ball_set_number,
                 main_ball_set_range,
                 second_ball_set_number,
                 second_ball_set_range,
                 third_ball_set_number,
                 third_ball_set_range):

        if main_ball_set_number < 0:
            raise ValueError("main ball set number can't be negative!")
        if main_ball_set_range < 0:
            raise ValueError("main ball range number can't be negative!")
        if second_ball_set_number < 0:
            raise ValueError("second ball set number can't be negative!")
        if second_ball_set_range < 0:
            raise ValueError("second ball range number can't be negative!")
        if third_ball_set_number < 0:
            raise ValueError("third ball set number can't be negative!")
        if third_ball_set_range < 0:
            raise ValueError("third ball range number can't be negative!")
        
        self.country = country
        self.main_ball_set_number = main_ball_set_number
        self.main_ball_set_range = main_ball_set_range
        self.second_ball_set_number = second_ball_set_number
        self.second_ball_set_range = second_ball_set_range
        self.third_ball_set_number = third_ball_set_number
        self.third_ball_set_range = third_ball_set_range
        self.lottoResults = {}
        self.lottoTickets = {}
        super(Lotto, self).__init__()

    def set_ball_sets(self,
                      main_ball_set_number,
                      main_ball_set_range,
                      second_ball_set_number,
                      second_ball_set_range,
                      third_ball_set_number,
                      third_ball_set_range):
        """Allows the user to change the ball sets of a country's lottery.

        :param country: Name of country.
        :param main_ball_set_number: Number of balls in main ball set.
        :param main_ball_set_range: Range of balls in main ball set.
        :param second_ball_set_number: Number of balls in second ball set.
        :param second_ball_set_range: Range of balls in second ball set. If there isnt a second ball
         set then this value must be 0.
        :param third_ball_set_number: Number of balls in third ball set.
        :param third_ball_set_range: Range of balls in third ball set. If there isnt a third ball
         set then this value must be 0.

        :type country: str
        :type main_ball_set_number: int
        :type main_ball_set_range: int
        :type second_ball_set_number: int
        :type second_ball_set_range: int
        :type third_ball_set_number: int
        :type third_ball_set_range: int
        """
        self.main_ball_set_number = main_ball_set_number
        self.main_ball_set_range = main_ball_set_range
        self.second_ball_set_number = second_ball_set_number
        self.second_ball_set_range = second_ball_set_range
        self.third_ball_set_number = third_ball_set_number
        self.third_ball_set_range = third_ball_set_range

    def __str__(self):
        """Allows the user to view the ball sets of a country's lottery.
        """
        return ("Country: {} \n"
                "======================\n"
                "Main ball number: {}\n"
                "Main ball range: {}\n"
                "Second ball number: {}\n"
                "Second ball range: {}\n"
                "Third ball number: {}\n"
                "Third ball range: {}\n".format(self.country,
                                                self.main_ball_set_number,
                                                self.main_ball_set_range,
                                                self.second_ball_set_number,
                                                self.second_ball_set_range,
                                                self.third_ball_set_number,
                                                self.third_ball_set_range))


    def parse_all_results_files(self):
        """Parses the results file for each country's lottery.
        """
        files = []
        new_dir = os.getcwd().replace('\\lottoTickets', '').replace('\\lottoResults', '')\
                  .replace('\\Processed', '')
        os.chdir(new_dir)
        os.chdir(os.path.join(os.getcwd() + '\\lottoResults\\'))
        for file in os.listdir(os.getcwd()):
            if os.path.isfile(os.path.join(os.getcwd(), file)) and self.country.lower() in file:
                files.append(file)
                
        for file in files:
            with open(file, newline='') as csvfile:
                csvfile.readline()
                csvfile.readline()
                lottoNumbers = csvfile.readline()

            index = lottoNumbers.find(';')
            mainSetNumbers = list(map(
                int, lottoNumbers[:index].split(':')))
            mainSetNumbers.sort()
            lottoNumbers = lottoNumbers[index + 1:]

            lottoResultNumbers = {'main ball set': mainSetNumbers}

            if self.second_ball_set_number != 0:
                index = lottoNumbers.find(';')
                secondSetNumbers = list(map(int, lottoNumbers[:index].split(':')))
                secondSetNumbers.sort()
                lottoNumbers = lottoNumbers[index + 1:]
                lottoResultNumbers['second ball set'] = secondSetNumbers

            if self.third_ball_set_number != 0:
                thirdSetNumbers = list(map(int, lottoNumbers[:index].split(':')))
                thirdSetNumbers.sort()
                lottoResultNumbers['third ball set'] = thirdSetNumbers
                

            index = file.find('_')
            file = file[index + 1:]
            index = file.find('_')
            date = file[:index]

            file = file[index + 1:]
            index = file.find(' ')
            drawNumber = file[:index]

            file = file[index + 1:]
            index = file.find('-')
            
            resultNumber = file[index+1:-4]
            
            self.lottoResults.update({resultNumber: {'date': date,
                                                     'draw number': drawNumber,
                                                     'lotto numbers': lottoResultNumbers}})

    def get_all_results(self):
        return self.lottoResults

    def parse_all_tickets_files(self):
        """Parses the tickets file for each country's lottery.
        """
        files = []
        jackpotWon = False

        new_dir = os.getcwd().replace('\\lottoTickets', '').replace('\\lottoResults', '')\
                  .replace('\\Processed', '')
        os.chdir(new_dir)
        os.chdir(os.path.join(os.getcwd() + '\\lottoTickets\\'))
        for file in os.listdir(os.getcwd()):
            if os.path.isfile(os.path.join(os.getcwd(), file)) and self.country.lower() in file:
                files.append(file)

        for file in files:
            originalFile = file

            # parse the file information                
            index = file.find('_')
            file = file[index + 1:]
            index = file.find('_')
            date = file[:index]

            file = file[index + 1:]
            index = file.find('-')
            
            drawNumber = file[:index]
            index = file.find('-')
            ticketsNumber = file[index + 1:-4]
            
            with open(originalFile, newline='') as csvfile:
                csvfile.readline()
                ticketReader = csv.reader(csvfile, delimiter=';')

                # Initialize lists
                # creates an empty list for the number of balls in the set
                matchedMainBallNumbers = [0] * self.main_ball_set_number
                matchedSecondSetNumbers = [0] * self.second_ball_set_number
                matchedThirdSetNumbers = [0] * self.third_ball_set_number
                
                jackpot = 0
                jackpotTickets = []
                lottotickets = {}
                matchedNumbers = {}
                
                for count, row in enumerate(ticketReader, start=1):  
                    if count % 2 == 0: # skip empty rows
                        ticket_id = row[0]
                        mainBallSet = list(map(int, row[1].split(':')))
                        # splits ball sets and coverts each number to int
                        mainBallSet.sort()
                        resultsMain = self.lottoResults[ticketsNumber]['lotto numbers']['main ball set']


                        if len(set(resultsMain) & set(mainBallSet)) > 0:
                            matchedMainBallNumbers[len(set(resultsMain) & set(mainBallSet))-1] += 1
                        # checks number of matched balls using sets
                        if len(set(resultsMain) & set(mainBallSet)) == self.main_ball_set_number:
                            # checks all numbers matcehed
                            jackpot += 1
                            jackpotTickets.append(ticket_id)
                        lottotickets.update({ticket_id: {'main ball set': mainBallSet}})

                        numberBallsMatchedMain = {}
                        for i in range(len(matchedMainBallNumbers)):
                            numberBallsMatchedMain.update({i+1: matchedMainBallNumbers[i]})

                        matchedNumbers.update({'main ball set': numberBallsMatchedMain})
                             
                        if self.second_ball_set_number != 0:
                            secondBallSet = list(map(int, row[2].split(':')))
                            secondBallSet.sort()
                            resultsSecond = self.lottoResults[ticketsNumber]['lotto numbers']['second ball set']
                            if len(set(resultsSecond) & set(secondBallSet)) > 0:
                                matchedSecondSetNumbers[len(set(resultsSecond) & set(secondBallSet))-1] += 1
                            if len(set(resultsSecond) & set(secondBallSet)) != self.second_ball_set_number:
                                if ticket_id in jackpotTickets:
                                    # If the main ball is matched but the second ball set isnt they havent won
                                    jackpot -= 1
                                    jackpotTickets.remove(ticket_id)
                            lottotickets[ticket_id].update({'second ball set': secondBallSet})

                            numberBallsMatchedSecond = {}
                            for i in range(len(matchedSecondSetNumbers)):
                                numberBallsMatchedSecond.update({i+1: matchedSecondSetNumbers[i]})

                            matchedNumbers.update({'second ball set': numberBallsMatchedSecond})
                            
                        if self.third_ball_set_number != 0:
                            thirdBallSet = list(map(int, row[3].split(':')))
                            thirdBallSet.sort()
                            resultsThird = self.lottoResults[ticketsNumber]['lotto numbers']['third ball set']
                            if len(set(resultsThird) & set(thirdBallSet)) > 0:
                                matchedThirdSetNumbers[len(set(resultsThird) & set(thirdBallSet))-1] += 1                    
                            if len(set(resultsThird) & set(thirdBallSet)) != self.third_ball_set_number:
                                if ticket_id in jackpotTickets:
                                    # If the main ball is matched but the third ball set isnt they havent won
                                    jackpot -= 1
                                    jackpotTickets.remove(ticket_id)
                            lottotickets[ticket_id].update({'third ball set': thirdBallSet})

                            numberBallsMatchedThird = {}
                            for i in range(len(matchedThirdSetNumbers)):
                                numberBallsMatchedThird.update({i+1: matchedThirdSetNumbers[i]})

                            matchedNumbers.update({'third ball set': numberBallsMatchedThird})

            if jackpot > 0:
                jackpotWon = True

            self.lottoTickets.update({ticketsNumber: {'date': date,
                                                      'draw number': drawNumber,
                                                      'number of balls matched': matchedNumbers,
                                                      'jackpot won?': jackpotWon,
                                                      'jackpot winners': jackpotTickets,
                                                      'all lotto tickets': lottotickets}})

            new_dir = os.getcwd().replace('\\lottoTickets', '') + '\\Processed\\'
            os.chdir(new_dir)

            with open(originalFile[:-4] + '-details.csv', 'w', newline='') as csvfile:
                ticketWriter = csv.writer(csvfile, delimiter=':')
                ticketWriter.writerow(['number of balls matched'])

                ticketWriter.writerow(['main ball set number of matches'])
                row = list(range(1, self.main_ball_set_number+1))
                ticketWriter.writerow(row)
                ticketWriter.writerow(matchedMainBallNumbers)
                ticketWriter.writerow([])

                if self.second_ball_set_number != 0:
                    ticketWriter.writerow(['second ball set number of matches'])
                    row = list(range(1, self.second_ball_set_number+1))
                    ticketWriter.writerow(row)
                    ticketWriter.writerow(matchedSecondSetNumbers)
                    ticketWriter.writerow([])

                if self.third_ball_set_number != 0:
                    ticketWriter.writerow(['third ball set number of matches'])
                    row = list(range(1, self.third_ball_set_number+1))
                    ticketWriter.writerow(row)
                    ticketWriter.writerow(matchedThirdSetNumbers)
                    ticketWriter.writerow([])

                if jackpotWon:
                    won = 'yes'
                else:
                    won = 'no'
                
                ticketWriter.writerow(['jackpot won?'])
                ticketWriter.writerow([won])

    def get_all_tickets(self):
        return self.lottoTickets


if __name__ == "__main__":
    germany = LottoCountry("Germany", 5, 59, 1, 20, 0, 0)
    italy = LottoCountry("Italy", 6, 70, 1, 15, 0, 0)
    norway = LottoCountry("Norway", 4, 30, 1, 10, 1, 5)

    print(germany)
    print(italy)
    print(norway)

    germany.parse_all_results_files()
    a = germany.get_all_results()
    b = germany.get_all_tickets()
    germany.parse_all_tickets_files()

    italy.parse_all_results_files()
    italy.parse_all_tickets_files()

    norway.parse_all_results_files()
    norway.parse_all_tickets_files()
