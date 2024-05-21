/**
 * Base class for the bond calculators which calculate the bond price given an
 * interest rate, number of periods and face value.
 * 
 * @author Xolani Mazibuko
 */
public abstract class BondCalculator {
	protected double face_value;
	protected int number_of_periods;
	protected double interest_rate;
	protected double price;
	/**
	 * Constructor 
	 * 
	 * @param face_value
	 * 					initial value of the bond
	 * @param number_of_periods
	 * 					number of years until maturity of bond
	 * @param interest_rate
	 * 					decimal value of interest
	 */
	public BondCalculator(double face_value, int number_of_periods, 
						  double interest_rate) {
		this.face_value = face_value;
		this.number_of_periods = number_of_periods;
		this.interest_rate = interest_rate;
	}
	
	/**
	 * Calculate the price of the bond after maturity.
	 * 
	 * @return returns calculated price.
	 */
	public double calculatePrice() {
		return price;
	}
}
