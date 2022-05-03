package check;

import constants.Constants;

public class Main {

	private static String firstName = "稲葉";
	private static String lastName = "由理佳";

	private static void printName(String firstName, String lastName) {
		String Name = firstName + lastName;
		System.out.println(Name);
	}

	public static void main(String[] args) {
		printName(firstName, lastName);

		Pet pet = new Pet(Constants.CHECK_CLASS_JAVA, Constants.CHECK_CLASS_HOGE);
		pet.introduce();

		RobotPet robotpet = new RobotPet(Constants.CHECK_CLASS_R2D2, Constants.CHECK_CLASS_LUKE);
		robotpet.introduce();

	}

}
