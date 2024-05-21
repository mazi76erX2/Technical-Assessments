/**
 * GUI Implementation of the Bond Calculators.
 * 
 * @author Xolani Mazibuko
 *
 */
import javax.swing.*; 
import java.awt.Font;
import java.awt.event.*; 

public class BondCalculatorGUI {
	/**
	 *Generates an error message if the number is less than 0.
	 * 
	 * @param variable name of the variable in the message.
	 * @return String with the error message.
	 */
	public static String errorMessagePositve(String variable) {
		return variable + " needs to be a positive number.";
	}
	
	
	/**
	 *Generates an error message if the rate is less than 0 or more than 100.
	 * 
	 * @param variable name of the rate in the message.
	 * @return String with the error message.
	 */
	public static String errorMessageInterest(String variable) {
		return variable + " rate must be between 0 and 100.";
	}
	
	
	/**
	 * Validates the data entered by the user in the Zero Coupon Bond Frame.
	 * 
	 * @param face_value
	 * 					initial value of the bond
	 * @param number_of_periods
	 * 					number of years until maturity of bond
	 * @param interest_rate
	 * 					decimal value of interest
	 * @return
	 * 			Error message depending on which input is invalid.
	 */
	public static String validateData(double face_value, 
			int n, double interest) {
		String message = "";
		
		if (face_value < 0) {
			message = errorMessagePositve("Face value");
		}
		
		if (n < 0) {
			message = errorMessagePositve("Number of periods");
		}
		
		
		if (interest > 100 || interest < 0) {
			message = errorMessageInterest("Interest rate");
		}
		
		return message;
	}
	
	
	/**
	 * Validates the data entered by the user in the Coupon Paying Bond Frame.
	 * 
	 * @param face_value
	 * 					initial value of the bond
	 * @param number_of_periods
	 * 					number of years until maturity of bond
	 * @param interest_rate
	 * 					decimal value of interest
	 * @return
	 * 			Error message depending on which input is invalid.
	 */
	public static String validateData(double face_value, int n, 
									  double interest, double coupon_rate) {
		String message = "";
		
		if (face_value < 0) {
			message = errorMessagePositve("Face value");
		}
		
		if (n < 0) {
			message = errorMessagePositve("Number of periods");
		}
		
		if (coupon_rate < 0) {
			message = errorMessagePositve("Coupon rate");
		}
		
		if (interest > 100 || interest < 0) {
			message = errorMessageInterest("Interest rate");
		}
		
		if (coupon_rate > 100 || coupon_rate < 0) {
			message = errorMessageInterest("Coupon rate");
		}
		return message;
	}
	
	
	/**
	 * Creates the Main Frame when the program is launched.
	 */
	public static void createMainFrame() {
		JFrame fBond = new JFrame("Bond Calculator");
		
		JButton bZero_bond = new JButton("Zero Coupon Bond");
		JButton bCoupon_paying_bond = new JButton("Coupon Paying Bond");
		JButton bExit = new JButton("Exit");
		
		JLabel lWelcome_screen1 = new JLabel("Welcome to the Bond Calculator");
		JLabel lWelcome_screen2 = new JLabel("Please select which calculator "
											+ "you would like to use:");
		Font f = new Font("", Font.BOLD, 22);
		
		fBond.add(bZero_bond);
		fBond.add(bExit);
		fBond.add(bCoupon_paying_bond);
		fBond.add(lWelcome_screen1);
		fBond.add(lWelcome_screen2);
		
		fBond.setSize(400,240);
		bZero_bond.setBounds(30,100,150,30);
		bCoupon_paying_bond.setBounds(200,100,150,30);
		bExit.setBounds(200,150,150,30);
		
		lWelcome_screen1.setBounds(30,0,500,100);
		lWelcome_screen1.setFont(f);
		lWelcome_screen2.setBounds(40,30,500,100);
		
		fBond.setLayout(null); 
		fBond.setVisible(true);
		
		bZero_bond.addActionListener(new ActionListener() {  
			public void actionPerformed(ActionEvent e) {
				fBond.setVisible(false);
				fBond.dispose();
				createZCBFrame();  
			}  
		});
		
		bCoupon_paying_bond.addActionListener(new ActionListener() {  
			public void actionPerformed(ActionEvent e) {
				fBond.setVisible(false);
				fBond.dispose();
				createCPBFrame();  
			}  
		});
		
		bExit.addActionListener(new ActionListener() {  
			public void actionPerformed(ActionEvent e) {
				System.exit(0);  
			}  
		});
	}
	
	/**
	 * Creates the Zero Coupon Bond Frame.
	 */
	public static void createZCBFrame() {
		// Initializes all the components of GUI
		JFrame fZCB = new JFrame("Zero Coupon Bond Calculator");
		
		JButton bCalculate = new JButton("Calculate Bond Price");
		JButton bMain = new JButton("Back to Main Screen");
		JButton bExit = new JButton("Exit");
		
		JLabel lEnter = new JLabel("Please enter the values below:");
		JLabel lFace = new JLabel("face value:             R");
		JLabel lNum = new JLabel("number of periods:");
		JLabel lInterest = new JLabel("interest rate:");
		JLabel lPercent = new JLabel("%");
		
		JTextField tFace = new JTextField("");
		JTextField tNum = new JTextField(""); 
		JTextField tInterest = new JTextField("");
		JTextField tResult = new JTextField(""); 
		
		Font f = new Font("", Font.BOLD, 18);
		
		fZCB.add(bCalculate);
		fZCB.add(bMain);
		fZCB.add(bExit);
		fZCB.add(lEnter);
		fZCB.add(lFace);
		fZCB.add(lNum);
		fZCB.add(lInterest);
		fZCB.add(lPercent);
		fZCB.add(tFace);
		fZCB.add(tNum);
		fZCB.add(tInterest);
		fZCB.add(tResult);
		
		fZCB.setSize(350,380);
		fZCB.setResizable(false);
		
		bCalculate.setBounds(35,160,260,30);
		bMain.setBounds(35,250,260,30); 
		bExit.setBounds(35,290,260,30);
		
		lEnter.setBounds(30,0,500,100);
		lEnter.setFont(f);
		lFace.setBounds(30,30,500,100);
		lNum.setBounds(30,60,500,100);
		lInterest.setBounds(30,90,500,100);
		lPercent.setBounds(290,90,500,100);
		
		tFace.setBounds(140,70,150,20);
		tNum.setBounds(140,100,150,20);
		tInterest.setBounds(140,130,150,20);
		tResult.setBounds(15,200,300,40);
		
		tFace.setHorizontalAlignment(SwingConstants.RIGHT);
		tNum.setHorizontalAlignment(SwingConstants.RIGHT);
		tInterest.setHorizontalAlignment(SwingConstants.RIGHT);
		tResult.setHorizontalAlignment(SwingConstants.CENTER);
		tResult.setEditable(false);
		
		fZCB.setLayout(null); 
		fZCB.setVisible(true);
		
		/**
		 * Validates the data entered by the user and displays an error message
		 * if either no data has been entered in the textfields or the data is
		 * not valid  
		 */
		bCalculate.addActionListener(new ActionListener() {  
			public void actionPerformed(ActionEvent e) {
				boolean valid = true;
				
				if (tFace.getText().trim().isEmpty()) {
					JOptionPane.showMessageDialog(null, "Face Value has not "
												  + "been entered.",
												  "Invalid Input",
												  JOptionPane.ERROR_MESSAGE);
					valid = false;
				}
				else if(tNum.getText().trim().isEmpty()) {
					JOptionPane.showMessageDialog(null, "Number of periods has"
												  + " not been entered.",
												  "Invalid Input",
												  JOptionPane.ERROR_MESSAGE);
					valid = false;
				}
				else if(tInterest.getText().trim().isEmpty()) {
					JOptionPane.showMessageDialog(null, "Interest rate has not"
												  + " been entered.",
												  "Invalid Input",
												  JOptionPane.ERROR_MESSAGE);
					valid = false;
				}

				
				double face_value = Double.parseDouble(tFace.getText());
				int n = Integer.parseInt(tNum.getText());
				double interest = Double.parseDouble(tInterest.getText());
		
				String validNumbers = validateData(face_value, n, interest);
				
				if (validNumbers != "") {
					JOptionPane.showMessageDialog(null, validNumbers, 
							  					  "Invalid Input",
												  JOptionPane.ERROR_MESSAGE);
					valid = false;
				}
				
				if (valid) {
					ZeroCouponBondCalculator bond = 
							new ZeroCouponBondCalculator(face_value, 
														 n, 
														 interest/100);
					
					tResult.setText(String.format("The Bond value at maturity "
												  + "will be R%.2f", 
												  bond.calculatePrice()));
				}
			}  
		});
		
		// Allows the user to go back to the main screen.
		bMain.addActionListener(new ActionListener() {  
			public void actionPerformed(ActionEvent e) {
				fZCB.setVisible(false);
				fZCB.dispose();
				createMainFrame();
			}
		});
		
		// Allows the user to close the program.
		bExit.addActionListener(new ActionListener() {  
			public void actionPerformed(ActionEvent e) {
				System.exit(0);
			}
		});
	}
	
	
	/**
	 * Creates the Coupon Paying Bond Frame.
	 */
	public static void createCPBFrame() {
		// Initializes all the components of GUI
		JFrame fCPB = new JFrame("Coupon Paying Bond Calculator");
		
		JButton bCalculate = new JButton("Calculate Bond Price");
		JButton bMain = new JButton("Back to Main Screen");
		JButton bExit = new JButton("Exit");
		
		JLabel lEnter = new JLabel("Please enter the values below:");
		JLabel lFace = new JLabel("face value:             R");
		JLabel lNum = new JLabel("number of periods:");
		JLabel lInterest = new JLabel("interest rate:");
		JLabel lCoupon_rate = new JLabel("coupon rate:");
		JLabel lPercentI = new JLabel("%");
		JLabel lPercentC = new JLabel("%");
		
		JTextField tFace = new JTextField("");
		JTextField tNum = new JTextField(""); 
		JTextField tInterest = new JTextField("");
		JTextField tCoupon_rate = new JTextField("");
		JTextField tResult = new JTextField(""); 
		
		Font f = new Font("", Font.BOLD, 18);
		
		fCPB.add(bCalculate);
		fCPB.add(bMain);
		fCPB.add(bExit);
		fCPB.add(lEnter);
		fCPB.add(lFace);
		fCPB.add(lNum);
		fCPB.add(lInterest);
		fCPB.add(lPercentI);
		fCPB.add(lPercentC);
		fCPB.add(lCoupon_rate);
		fCPB.add(tFace);
		fCPB.add(tNum);
		fCPB.add(tInterest);
		fCPB.add(tCoupon_rate);
		fCPB.add(tResult);
		
		fCPB.setSize(350,400);
		fCPB.setResizable(false);
		
		bCalculate.setBounds(35,190,260,30);
		bMain.setBounds(35,270,260,30); 
		bExit.setBounds(35,310,260,30);
		
		lEnter.setBounds(30,0,500,100);
		lEnter.setFont(f);
		lFace.setBounds(30,30,500,100);
		lNum.setBounds(30,60,500,100);
		lInterest.setBounds(30,90,500,100);
		lPercentI.setBounds(290,90,500,100);
		lCoupon_rate.setBounds(30,120,500,100);
		lPercentC.setBounds(290,120,500,100);

		tFace.setBounds(140,70,150,20);
		tNum.setBounds(140,100,150,20);
		tInterest.setBounds(140,130,150,20);
		tCoupon_rate.setBounds(140,160,150,20);
		tResult.setBounds(15,225,300,40);
		
		tFace.setHorizontalAlignment(SwingConstants.RIGHT);
		tNum.setHorizontalAlignment(SwingConstants.RIGHT);
		tInterest.setHorizontalAlignment(SwingConstants.RIGHT);
		tCoupon_rate.setHorizontalAlignment(SwingConstants.RIGHT);
		tResult.setHorizontalAlignment(SwingConstants.CENTER);
		tResult.setEditable(false);
		
		fCPB.setLayout(null); 
		fCPB.setVisible(true);
		
		/**
		 * Validates the data entered by the user and displays an error message
		 * if either no data has been entered in the textfields or the data is
		 * not valid  
		 */
		bCalculate.addActionListener(new ActionListener() {  
			public void actionPerformed(ActionEvent e) {
				boolean valid = true;
				
				if (tFace.getText().trim().isEmpty()) {
					JOptionPane.showMessageDialog(null, "Face Value has not "
												  + "been entered.",
												  "Invalid Input",
												  JOptionPane.ERROR_MESSAGE);
					valid = false;
				}
				else if(tNum.getText().trim().isEmpty()) {
					JOptionPane.showMessageDialog(null, "Number of periods has"
												  + " not been entered.",
												  "Invalid Input",
												  JOptionPane.ERROR_MESSAGE);
					valid = false;
				}
				else if(tInterest.getText().trim().isEmpty()) {
					JOptionPane.showMessageDialog(null, "Interest rate has not"
												  + " been entered.",
												  "Invalid Input",
												  JOptionPane.ERROR_MESSAGE);
					valid = false;
				}
				else if(tCoupon_rate.getText().trim().isEmpty()) {
					JOptionPane.showMessageDialog(null, "Coupon rate has not"
												  + " been entered.",
												  "Invalid Input",
												  JOptionPane.ERROR_MESSAGE);
					valid = false;
				}

				
				double face_value = Double.parseDouble(tFace.getText());
				int n = Integer.parseInt(tNum.getText());
				double interest = Double.parseDouble(tInterest.getText());
				double coupon_rate = Double.parseDouble(tCoupon_rate.getText());
		
				String validNumbers = validateData(face_value, n, interest, 
												   coupon_rate);
				
				if (validNumbers != "") {
					JOptionPane.showMessageDialog(null, validNumbers, 
							  					  "Invalid Input",
												  JOptionPane.ERROR_MESSAGE);
					valid = false;
				}
				
				if (valid) {
					CouponPayingBondCalculator bond = 
							new CouponPayingBondCalculator(face_value,  
														   n, 
														   interest/100, 
														   coupon_rate/100);
					
					tResult.setText(String.format("The Bond value at maturity "
												  + "will be R%.2f", 
												  bond.calculatePrice()));
				}
			}  
		});
		
		// Allows the user to go back to the main screen.
		bMain.addActionListener(new ActionListener() {  
			public void actionPerformed(ActionEvent e) {
				fCPB.setVisible(false);
				fCPB.dispose();
				createMainFrame();
			}
		});
		
		// Allows the user to close the program.
		bExit.addActionListener(new ActionListener() {  
			public void actionPerformed(ActionEvent e) {
				System.exit(0);
			}
		});
	}
	

	public static void main(String[] args) {
		createMainFrame();
	}
}
