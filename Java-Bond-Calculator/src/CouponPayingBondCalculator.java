/** 
 * Derived class of BondCalculator which calculates the Bond Price at maturity
 * where periodic interest payments are made during the time period.
 * 
 * @author Xolani Mazibuko
 *
 */
public class CouponPayingBondCalculator extends BondCalculator {
	private double coupon_rate;
	/**
	 * Constructor 
	 * 
	 * @param face_value
	 * 					initial value of the bond
	 * @param number_of_periods
	 * 					number of years until maturity of bond
	 * @param interest_rate
	 * 					decimal value of interest
	 * @param coupon_rate
	 * 					decimal value of the coupon bond rate
	 */
	public CouponPayingBondCalculator(double face_value, int number_of_periods, 
									  double interest_rate, double coupon_rate) {
		super(face_value, number_of_periods, interest_rate);
	}
	
	/**
	 * Calculate the price of the bond after maturity. 
	 * 
	 * @return returns calculated price.
	 */
	public double calculatePrice() {
		double coupon_price = face_value*coupon_rate;
		
		double coupon_maturity = (coupon_price)*
								 (1 - Math.pow((1+interest_rate), 
											    -1*number_of_periods))/
								 (interest_rate);
		
		double present_value_maturity = (face_value)/
										(Math.pow((1+interest_rate), 
												   number_of_periods));
		
		price = coupon_maturity + present_value_maturity;
		
		return price;
	}

}