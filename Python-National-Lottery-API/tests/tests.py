import unittest
from unittest.mock import Mock, patch
import json
from lottoResults import Lotto, LottoCountry
import os

from unittest import TestCase
TestCase.maxDiff = None


class TestLottoBase(unittest.TestCase):
    def test_set_ball_sets(self):
        result = Lotto().set_ball_sets()
        expected = None

        self.assertEqual(result, expected)

    def test_string(self):
        result = str(Lotto())
        expected = ""

        self.assertEqual(result, expected)

    def test_parse_all_results_files(self):
        result = Lotto().parse_all_results_files()
        expected = None

        self.assertEqual(result, expected)

    def test_parse_all_tickets_files(self):
        result = Lotto().parse_all_tickets_files()
        expected = None

        self.assertEqual(result, expected)


class TestLottoCountry(unittest.TestCase):
    def test_negative_main_number(self):
        num = -1
        self.assertRaises(ValueError,
                          LottoCountry,
                          "a", num, 1, 1, 1, 1, 1)

    def test_negative_main_range(self):
        num = -1
        self.assertRaises(ValueError,
                          LottoCountry,
                          "a", 1, num, 1, 1, 1, 1)

    def test_negative_second_number(self):
        num = -1
        self.assertRaises(ValueError,
                          LottoCountry,
                          "a", 1, 1, num, 1, 1, 1)

    def test_negative_second_range(self):
        num = -1
        self.assertRaises(ValueError,
                          LottoCountry,
                          "a", 1, 1, 1, num, 1, 1)

    def test_negative_third_number(self):
        num = -1
        self.assertRaises(ValueError,
                          LottoCountry,
                          "a", 1, 1, 1, 1, num, 1)

    def test_negative_third_range(self):
        num = -1
        self.assertRaises(ValueError,
                          LottoCountry,
                          "a", 1, 1, 1, 1, 1, num)

    def test_set_ball_sets(self):
        self.country = "a"
        self.main_ball_set_number = 1
        self.main_ball_set_range = 2
        self.second_ball_set_number = 3
        self.second_ball_set_range = 4
        self.third_ball_set_number = 5
        self.third_ball_set_range = 6
        self.lottery = LottoCountry(self.country,
                                    self.main_ball_set_number,
                                    self.main_ball_set_range,
                                    self.second_ball_set_number,
                                    self.second_ball_set_range,
                                    self.third_ball_set_number,
                                    self.third_ball_set_range)

        self.lottery.set_ball_sets(7, 8, 9, 10, 11, 12)
        result = str(self.lottery)
        expected = ("Country: a \n" +
                    "======================\n" +
                    "Main ball number: 7\n" +
                    "Main ball range: 8\n" +
                    "Second ball number: 9\n" +
                    "Second ball range: 10\n" +
                    "Third ball number: 11\n" +
                    "Third ball range: 12\n")
        
        self.assertEqual(result, expected)

    def test_string(self):
        self.country = "a"
        self.main_ball_set_number = 1
        self.main_ball_set_range = 2
        self.second_ball_set_number = 3
        self.second_ball_set_range = 4
        self.third_ball_set_number = 5
        self.third_ball_set_range = 6
        self.lottery = LottoCountry(self.country,
                                    self.main_ball_set_number,
                                    self.main_ball_set_range,
                                    self.second_ball_set_number,
                                    self.second_ball_set_range,
                                    self.third_ball_set_number,
                                    self.third_ball_set_range)
        result = str(self.lottery)
        expected = ("Country: a \n" +
                    "======================\n" +
                    "Main ball number: 1\n" +
                    "Main ball range: 2\n" +
                    "Second ball number: 3\n" +
                    "Second ball range: 4\n" +
                    "Third ball number: 5\n" +
                    "Third ball range: 6\n")
        
        self.assertEqual(result, expected)

    def test_parse_all_results_files(self):
        self.country = "test"
        self.main_ball_set_number = 6
        self.main_ball_set_range = 7
        self.second_ball_set_number = 0
        self.second_ball_set_range = 0
        self.third_ball_set_number = 0
        self.third_ball_set_range = 0
        self.lottery = LottoCountry(self.country,
                                    self.main_ball_set_number,
                                    self.main_ball_set_range,
                                    self.second_ball_set_number,
                                    self.second_ball_set_range,
                                    self.third_ball_set_number,
                                    self.third_ball_set_range)

        self.lottery.parse_all_results_files()
        results = self.lottery.get_all_results()
        expected = ({'1-1': {'date': '01-01-2019',
                             'draw number': '11111',
                             'lotto numbers': {'main ball set': [1, 2, 3, 4, 5, 6]}}})
        
        self.assertEqual(results, expected)
        
    def test_parse_all_tickets_files(self):
        self.country = "test"
        self.main_ball_set_number = 6
        self.main_ball_set_range = 7
        self.second_ball_set_number = 0
        self.second_ball_set_range = 0
        self.third_ball_set_number = 0
        self.third_ball_set_range = 0
        self.lottery = LottoCountry(self.country,
                                    self.main_ball_set_number,
                                    self.main_ball_set_range,
                                    self.second_ball_set_number,
                                    self.second_ball_set_range,
                                    self.third_ball_set_number,
                                    self.third_ball_set_range)

        self.lottery.parse_all_results_files()
        self.lottery.parse_all_tickets_files()
        a = self.lottery.get_all_results()
        results = self.lottery.get_all_tickets()
        expected = ({'1-1': {'date': '01-01-2019',
                             'draw number': '11111',
                             'number of balls matched': {'main ball set': {1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 1}},
                             'jackpot won?': True,
                             'jackpot winners': ['1111111'],
                             'all lotto tickets': {'1111111': {'main ball set': [1, 2, 3, 4, 5, 6]}}}})
        
        self.assertEqual(results, expected)

if __name__ == '__main__':
    unittest.main()
