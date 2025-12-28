/** 
 * Derived class of BondCalculator which calculates the Bond Price at maturity
 * where no periodic interest payments are made during the time period.
 * 
 * @author Xolani Mazibuko
 *
 */
public class ZeroCouponBondCalculator extends BondCalculator {
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
	public ZeroCouponBondCalculator(double face_value, int number_of_periods, 
									double interest_rate) {
		super(face_value, number_of_periods, interest_rate);
	}
	
	/**
	 * Calculate the price of the bond after maturity. Using the Zero Coupon 
	 * Formula.
	 * 
	 * @return returns calculated price.
	 */
	public double calculatePrice() {
		price = (face_value)/
				(Math.pow((1+interest_rate), number_of_periods));
		return price;
	}

}
