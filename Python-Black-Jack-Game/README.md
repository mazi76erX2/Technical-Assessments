Black Jack
==========

**Black jack game that takes in dealer's hand and tables' hands and outputs the result.**

Usage
-----

```python
>>> tables_hands = {
        'Lemmy': [['A', 'S'], [7, 'H'], ['A', 'D']],
        'Andrew': [['K', 'D'], [4, 'S'], [4, 'C']],
        'Billy': [[2, 'S'], [2, 'D'], [2, 'H'], [4, 'D'], [5, 'C']],
        'Carla': [['Q', 'C'], [6, 'S'], [9, 'D']],
    }

>>> dealers_hand= [['J', 'S'], [9, 'H']]

>>> blackjack_table = BlackJackTable(tables_hands, dealers_hand)

>>> result = blackjack_table.evalute_tables_hands()

>>> print('Result:')
>>> print(json.dumps(result, indent=2))
Result:
{
"Lemmy": "loses",
"Andrew": "loses",
"Billy": "beats dealer",
"Carla": "beats dealer"
}
```

Tests
-----

```bash
$ python test.py

.....
----------------------------------------------------------------------
Ran 5 tests in 0.005s

OK
```