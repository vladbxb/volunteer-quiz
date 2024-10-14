#include <iostream>
using namespace std;

int scale[8][8] = 
	{
	{17, 31, 44, 45, 50, 52, 57, 59}, 
	{1, 22, 24, 29, 32, 40, 56, 64}, 
	{11, 15, 16, 20, 23, 27, 36, 60}, 
	{3, 7, 14, 18, 33, 35, 55, 62}, 
	{5, 6, 8, 9, 12, 13, 19, 39}, 
	{2, 10 ,25, 34, 38, 42, 53, 61}, 
	{21, 28, 37, 46, 49, 51, 54, 63}, 
	{4, 26, 30, 41, 43, 47, 48, 58}
	};
int scalePunctaj[8];
int i, j, nr_intrebarii, punctaj, st, dr, mij;

bool prezicere, gasit, stop;
char c;

void afiseazaStatistici()
{
	cout << endl << "Statistici:" << endl;
	for (i = 0; i < 8; i++)
		cout << "Scale " << i + 1 << ": " << scalePunctaj[i] << endl;
}

int main()
{
	cout << "calculator punctaje scale\nscrie numarul intrebarii urmat de un spatiu si punctajul\ndaca ai terminat testul scrie 0\n";
	while (!stop)
	{
		cout << "a fost inceput un nou test\n";
		while (!prezicere)
		{
			cin >> nr_intrebarii;
			// conditie sfarsire test
			if (nr_intrebarii == 0)
			{
				cout << "!! testul este nesemnificativ\n";
				prezicere = true;
			}
			else
			{
				cin >> punctaj;
				// conditiile unui input invalid
				while (punctaj < 0 || punctaj > 4 || nr_intrebarii < 1 || nr_intrebarii > 64)
				{
					cout << "inputul nu este valid, ai grija! reintrodu datele: ";
					cin >> nr_intrebarii >> punctaj;
				}
				gasit = 0;
				// parcurgere scale
				for (i = 0; i < 8 && !gasit; i++)
				{
					st = 0;
					dr = 7;
					while (st <= dr)
					{
						mij = st + (dr - st) / 2;
						if (scale[i][mij] == nr_intrebarii)
						{
							// iesim din cautarea binara
							st = dr + 1;
							gasit = 1;
							scalePunctaj[i] += punctaj;
							cout << "intrebarea apartine scale-ului " << i + 1 << "\n";
							if (scalePunctaj[i] >= 17)
							{
								prezicere = true;
								cout << "!! testul a fost picat\n";
							}
						}
						if (scale[i][mij] < nr_intrebarii)
							st = mij + 1;
						else
							dr = mij - 1;
					}
				}
			}
		}
		afiseazaStatistici();
		for (i = 0; i < 8; i++)
			scalePunctaj[i] = 0;
		cout << "doresti sa continui? (y/n) : ";
		cin >> c;
		cin.get();
		if (c == 'n' || c == 'N')
			stop = 1;
		else
			prezicere = 0;
	}
	return 0;
}
