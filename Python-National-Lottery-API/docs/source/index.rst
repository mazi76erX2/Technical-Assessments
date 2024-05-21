National Lottery API
====================

**Documentation for the National Lottery API**

.. code-block:: console

    $ python lottoResults.py

.. code-block:: python

    >>> germany = LottoCountry("Germany", 5, 59, 1, 20, 0, 0)
    >>> print(germany)

    >>>	Country: Germany 
	...	======================
	...	Main ball number: 5
	...	Main ball range: 59
	...	Second ball number: 1
	...	Second ball range: 20
	...	Third ball number: 0
	...	Third ball range: 0

	>>> print(germany.get_all_results())
	>>> {'1-1': {'date': '03-11-2019', 'draw number': 
	...		'32322', 'lotto numbers': {'main ball set': [1, 5, 12, 
	...	23, 42], 'second ball set': [7]}}}

Features
--------

**National Lottery API** allows users to do the following:

- Locate uploaded Lottery files in csv format.
- Results the tickets by comparing the entered tickets to the winning numbers.
- Produces a results file that contains the count of matched numbers for the main balls and additional ball sets (up to 2 additional sets) and indicates if the jackpot was won.


Table of Contents
-----------------

.. toctree::
   :maxdepth: 2
   :caption: Contents:

   getting_started.rst
   testing.rst
   api.rst
   



Indices and tables
------------------

* :ref:`genindex`
* :ref:`modindex`
* :ref:`search`
