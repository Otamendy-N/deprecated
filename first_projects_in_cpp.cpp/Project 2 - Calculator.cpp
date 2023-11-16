/*PROGRAM DESIGNED BY: OTAMENDY NAPOLES*/
/*PROGRAM DESIGNED TO PERFORM BASIC MATH OPERATIONS*/

#include <iostream>									//library
#include <string>									//library

using namespace std;

int main() {										//strart program

	float x;										//var for num
	float y;										//var for num
	float sum,										//vars for names of operations
		  substraction,
		  multiplication,
		  divide;

	system("color 3f");								//change the color of start

	cout << "------------------------------------" <<endl;
	cout << "Este es mi segundo programa" <<endl;
	cout << "------------------------------------" <<endl;
	cout << "Ingrese primer numero: ";
	cin >> x;
	cout << "------------------------------------" <<endl;
	cout << "Ingrese segundo numero: ";
	cin >> y;
	cout << "------------------------------------" <<endl;

	system("cls");									//clean the display

	system("color 4f");								//change color for the result

	sum = x + y;
	substraction = x - y;
	multiplication = x * y;
	divide = x / y;

	cout << "El resultado de calcular "<<x<<" y "<<y<<" es:"<<
							"\n suma:				"<< sum<<		
							"\n resta:				"<< substraction<< 
							"\n multiplicacion:		"<< multiplication<< 
							"\n divicion:			"<< divide;

	cout << endl;
	system("pause");								//pause the console
	return 0;										//end the program
}


/*YEEEIIIIHHH I FINISHED MY SECOND FUNCTIONAL PROGRAM*/