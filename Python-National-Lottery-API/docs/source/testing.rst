Testing
=======

*Testing the National Lottery API**

.. code-block:: console

	$ cd tests

    $ python tests.py

    $ ..............
	$ ----------------------------------------------------------------------
	$ Ran 14 tests in 0.040s

	$ OK

	$ pip install coverage

	$ coverage run lottoResults.py

The program's output will be here and then:

.. code-block:: console

	$ coverage report

	$ Name              Stmts   Miss  Cover
	$ -------------------------------------
	$ lottoResults.py     218     25    89%