Getting Started
===============

LottoCountry
------------

Class for each countries lottery.

Set Ball Sets
^^^^^^^^^^^^^
Allows the user to change the ball sets of a country's lottery.

Example:

.. code-block:: python

    >>> italy = LottoCountry("Italy", 6, 70, 1, 15, 0, 0)
    >>> print(italy)

    >>> Country: Italy
	...	======================
	...	Main ball number: 6
	...	Main ball range: 70
	...	Second ball number: 1
	...	Second ball range: 15
	...	Third ball number: 0
	...	Third ball range: 0

	>>> print(italy)
	>>>	italy.set_ball_sets(6, 70, 1, 15, 1, 5)

	>>> print(italy)
	>>>	Country: Italy
	...	======================
	...	Main ball number: 6
	...	Main ball range: 70
	...	Second ball number: 1
	...	Second ball range: 15
	...	Third ball number: 1
	...	Third ball range: 5

Parse All Results Files
^^^^^^^^^^^^^^^^^^^^^^^
Parses the results files for a country's lottery.

Example:

.. code-block:: python

	>>> italy.parse_all_results_files()

	>>> print(italy.get_all_results())
	>>> {'1-1': {'date': '03-11-2019', 'draw number': '32322', 'lotto numbers': {'main ball set': [2, 4, 12, 13, 20, 21], 'second ball set': [7]}}}

Parse All Tickets Files
^^^^^^^^^^^^^^^^^^^^^^^
Parses the tickets files for a country's lottery and creates a csv file.

Example:

.. code-block:: python

	>>>	italy.parse_all_tickets_files()

	>>> print(italy.get_all_tickets()
	>>> {'1-1': {'date': '03-11-2019', 'draw number': '32322', 'number of balls matched': {'main ball set': {1: 3, 2: 0, 3: 2, 4: 0, 5: 0, 6: 0}, 'second ball set': {1: 1}}, 'jackpot won?': False, 'jackpot winners': [], 'all lotto tickets': {'2111131': {'main ball set': [1, 4, 5, 17, 30, 45], 'second ball set': [4]}, '2111132': {'main ball set': [1, 4, 13, 21, 32, 40], 'second ball set': [7]}, '2111133': {'main ball set': [7, 7, 13, 20, 21, 35], 'second ball set': [3]}, '2111134': {'main ball set': [1, 5, 5, 12, 23, 38], 'second ball set': [1]}, '2111135': {'main ball set': [1, 21, 23, 26, 32, 40], 'second ball set': [10]}}}}