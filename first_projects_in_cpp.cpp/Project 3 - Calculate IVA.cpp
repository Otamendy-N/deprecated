/*PROGRAM DESIGNED BY: OTAMENDY NAPOLES*/
/*PROGRAM DESIGNED FOR CALCULATE THE I.V.A OF A PRODUCT*/

#include <iostream>													//library
#include <string>													//library

using namespace std;												//space standard

int main() {														//start progarm

	system("color 3f");												//change color to blue

	float iva;														//the iva %
	float part;														//part of total price
	float total;													//price of product 
	float result;													//final price of product

	cout << "---------------------------------------------------"<<endl;
	cout << "Digite el Precio del Producto: ";cin >> total;
	cout << "---------------------------------------------------"<<endl;
	cout << "---------------------------------------------------" << endl;
	cout << "Digite el I.V.A: ";cin >> iva;
	cout << "---------------------------------------------------"<<endl;

	iva = iva / 100;												//convert iva to %
	part = total * iva;												//get the part of porcent
	result = total - part;											//final result

	cout << "---------------------------------------------------"<<endl;
	cout << "El precio final es: " << result <<endl;
	cout << "---------------------------------------------------"<<endl;

	cout << endl;
	system("pause");												//pause the program
	return 0;														//finish the function main
}

/*YEEEEIIII I FINISHED MY 3 FUNCTIONAL PROGRAM*/