from typing import List, Union, Dict
import json

SUITS: List[str] = ['H', 'S', 'C', 'D']
VALUES: List[Union[str, int]] = [
    2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A']
CONVERSION: Dict[str, int] = {'J': 10, 'Q': 10, 'K': 10, 'A': 11}

Hand = List[List[Union[str, int]]]

# card example: ('H', 2) 2 of hearts - Tuple
# hand example: {('H', 2). ('H', 8), ('D', 'A'), ('C', 5)} Dictionary of Tuples


class BlackJackTable:
    def __init__(self, table_hands: Dict[int, Hand], dealers_hand: Hand):
        self.table_hands: Dict[int, Hand] = table_hands
        self.dealers_hand: Hand = dealers_hand

    def extract_values(self):
        for player, hand in self.table_hands.items():
            hand_values: List[Union[str, int]] = [item[0] for item in hand]
            self.table_hands[player] = hand_values

        self.dealers_hand: List[Union[str, int]] = [
            item[0] for item in self.dealers_hand]

    @ staticmethod
    def determine_card_value(card: Union[str, int]) -> int:
        if type(card) == int:
            return card
        else:
            return CONVERSION[card]

    def evaluate_hand_win(self, hand_value: int, hand_length: int,
                          dealer_hand_value: int) -> str:
        if hand_length > 5:
            return 'loses'

        if hand_length == 5 and hand_value <= 21:
            return 'beats dealer'

        if hand_value > dealer_hand_value:
            return 'beats dealer'
        else:
            return 'loses'

    def evaluate_hand_value(self, hand: List) -> int:
        ace_count: int = hand.count('A')
        hand_value: int = 0

        for card in hand:
            hand_value += self.determine_card_value(card)

        while hand_value > 21 and ace_count > 0:
            hand_value -= 10
            ace_count -= 1

        return hand_value

    def evalute_tables_hands(self) -> Dict[str, str]:
        self.extract_values()
        dealers_hand_evaluated: int = self.evaluate_hand_value(
            self.dealers_hand)

        tables_hands_evaluated: Dict[int, bool] = {}
        for key, hand in self.table_hands.items():
            hand_value = self.evaluate_hand_value(hand)
            hand_win = self.evaluate_hand_win(
                hand_value, len(hand), dealers_hand_evaluated)
            tables_hands_evaluated[key] = hand_win

        return tables_hands_evaluated


if __name__ == "__main__":
    tables_hands: Dict[int, Hand] = {
        'Lemmy': [['A', 'S'], [7, 'H'], ['A', 'D']],
        'Andrew': [['K', 'D'], [4, 'S'], [4, 'C']],
        'Billy': [[2, 'S'], [2, 'D'], [2, 'H'], [4, 'D'], [5, 'C']],
        'Carla': [['Q', 'C'], [6, 'S'], [9, 'D']],
    }

    dealers_hand: Hand = [['J', 'S'], [9, 'H']]

    blackjack_table = BlackJackTable(tables_hands, dealers_hand)
    result: Dict[str, str] = blackjack_table.evalute_tables_hands()

    print('Result:')
    print(json.dumps(result, indent=2))
