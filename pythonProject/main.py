# This is a sample Python script.

# Press ⌃R to execute it or replace it with your code.
# Press Double ⇧ to search everywhere for classes, files, tool windows, actions, and settings.
'''
def print_hi(name):
    nome = input('Inserisci il tuo nome: ')
    print(f'Hi, {nome}')  # Press ⌘F8 to toggle the breakpoint.


# Esercizio 1 - Calcola la tua età tra 10 anni
x = input("Inserisci la tua età : ")
y = (int(x) + 10)
print("Fra 10 anni avrai : ", y , "anni")

# Creare una list contenente 5 numeri e successivamente stampare con il range di indici il terzo e il quarto numero della lista

listaNumeri = [1, 2, 3, 4, 5]
print(listaNumeri[2:4])
'''

#scrivere un programma che chiede all'utente 2 variabili x e y:e stampa sono uguali se sono uguali, più grande x, o più grande y

'''x = input("Inserisci var 1 : ")
y = input("Inserisci var 2 : ")

if (x == y):
    print("Uguali")
elif (x > y):
    print(x +" maggiore di "+ y)
else:
    print (y +" maggiore di "+ x)'''
'''
def jobType(nome, cognome, stipendio):
    if (stipendio <= 1000):
        print(nome, cognome, " Stagista")
    elif (stipendio > 1000 and stipendio < 2000):
        print(nome, cognome, "Impiegato ")
    else:
        print(nome, cognome, "Dirigente")

jobType('Federica', 'Spinelli', 1300)'''

# Creare una funzione areaTriangolo con due parametri base e altezza e che ha come valore di ritornol'area del triangolo

'''def areaTriangolo(base, altezza):
    a = (base * altezza)/2
    return a


print(areaTriangolo(3,3))'''

# creare una funzione login che chiede all'utente di inserire nome e password
# se corrispondono ritorna accesso consentito altrimenti ritorna accesso non consentito

'''databaseUtenti = ['federica', 'andrea', 'tizio', 'caio']
databasePassword = ['123', '456', '789', '000']
def login(nome, password):
    if nome in databaseUtenti:
        if password in databasePassword:
            print(nome, 'accesso consentito')
        else:
            print(nome, 'accesso non consentito')
login('federica', '1323')'''

# scrivere un programma morra cinese che chiede a due utenti di inserire
# una giocata foglio carta forbici. A seconda della giocata può vincere giocatore 1 giocatore 2 o terminare in pareggio

'''print("Benvenuti a Morra Cinese!")


# Chiedi ai giocatori di inserire la loro giocata
giocatore1 = 1
giocatore2 = 1

while giocatore1 != '0' and giocatore2 != '0':
    giocatore1 = input("Giocatore 1, scegli tra carta, forbice e sasso: ")
    giocatore2 = input("Giocatore 2, scegli tra carta, forbice e sasso: ")
    # Controlla la giocata di ciascun giocatore e determina il vincitore
    if giocatore1 == giocatore2:
        print("Pareggio!")
    elif giocatore1 == "carta":
        if giocatore2 == "forbice":
            print("Giocatore 2 vince!")
        else:
            print("Giocatore 1 vince!")
    elif giocatore1 == "forbice":
        if giocatore2 == "sasso":
            print("Giocatore 2 vince!")
        else:
            print("Giocatore 1 vince!")
    elif giocatore1 == "sasso":
        if giocatore2 == "carta":
            print("Giocatore 2 vince!")
        else:
            print("Giocatore 1 vince!")
    else:
        print("Opzione non valida. Inserire carta, forbice o sasso.")

    #print("Hai inserito zero!")'''

# lista di numeri lista riempita con numeri digitati da utente.
# Programma prevede utente con numero arbitrario, fino a quando non digita zero.
# Successivamente stampa la numera completa con i numeri creati da utente
# usa insert
# usa counter
'''
list = []

def listNumbers():
    number = 1
    somma = 0
    count = 0
    while number != 0:
        number = int(input('Inserisci numero:'))

        list.insert(count, number)
        count += 1


    for number in list:
        somma += number

    return somma
    #return list

print(listNumbers())

for number in list:
    print(number)'''

'''Un oggetto è un attore, ovvero un elemento che esegue operazioni all'interno di un sistema. 
In seguito a un'azione, viene modificato lo stato dell'oggetto o di altri oggetti.
Si immagini un oggetto nel mondo reale. Si supponga di essere in un parcheggio: cosa si vede? E probabile che si vedano molte macchine, di diverse forme, colori e dimensioni.
Per descrivere un'auto, è possibile usare proprietà come la marca, il modello, il colore e il tipo di auto. Se si assegnano valori a queste proprietà, diventa subito chiaro se si sta parlando di una Ferrari rossa o di una Jeep quattro ruote motrici o di una Mustang gialla e cosi via.'''

'''Creare una classe Canzone che rappresenta canzoni
Ogni canzone ha un titolo, un autore e l'anno di pubblicazione
La classe implementa il metodo init e il metodo str
Creare una lista di canzoni
Creare quindi all'interno della stessa pagina un programma che chiede all'utente cosa vuole fare:
1 aggiungere una nuova canzone
2 cercare una canzone dalla lista per titolo
3 stampare tutte le canzoni di un autore
4 rimuovere una canzone dal titolo
5 uscire dal programma'''

# creo classe canzone che rappresenta canzoni
class Canzone:
    # implemento metodo init
    def __init__(self, titolo, autore, anno):
        # ogni canzone ha titolo autore e l'anno di pubblicazione
        self.titolo = titolo
        self.autore = autore
        self.anno = anno
    # implemento metodo str
    def __str__(self):
        return f"{self.titolo} - {self.autore} ({self.anno})"

# Creare una lista di canzoni vuota
canzoni = []
scelta = 0
# chiedo all'utente cosa vuole fare
while scelta != 5:
    print("Cosa vuoi fare?")
    print("1. Aggiungere una nuova canzone")
    print("2. Cercare una canzone per titolo")
    print("3. Stampare tutte le canzoni di un autore")
    print("4. Rimuovere una canzone per titolo")
    print("5. Uscire dal programma")

    scelta = input("Inserisci il numero della tua scelta: ")

    if scelta == "1":
        titolo = input("Inserisci il titolo della nuova canzone: ")
        autore = input("Inserisci l'autore della nuova canzone: ")
        anno = input("Inserisci l'anno di pubblicazione della nuova canzone: ")
        # con append popolo la lista inizialmente creata vuota
        canzoni.append(Canzone(titolo, autore, anno))
        print("Canzone aggiunta con successo!")

    elif scelta == "2":
        titolo = input("Inserisci il titolo della canzone da cercare: ")
        trovata = False
        for canzone in canzoni:
            if canzone.titolo == titolo:
                print("Canzone trovata!", canzone)
                trovata = True
        if not trovata:
            print("Canzone non trovata.")

    elif scelta == "3":
        scegliautore = input("Inserisci l'autore di tutte le canzoni da stamoare: ")
        #autore = scegliautore
        listaCanzoni = []
        for canzone in canzoni:
            if canzone.autore == scegliautore:
                listaCanzoni.append(Canzone(titolo, autore, anno))
                print('Lista di tutte le canzoni dell\'autore', autore,':',canzone)
            else:
                print("Nessuna canzone trovata per questo autore.")

    elif scelta == "4":
        titolo_del = input("Inserisci il titolo della canzone da rimuovere: ")
        trovata = False
        for canzone in canzoni:
            if canzone.titolo == titolo_del:
                canzoni.remove(canzone)
                trovata = True
                print("Canzone rimossa.")
                break
        if not trovata:
            print("Canzone non trovata.")

    elif scelta == "5":
        print("Ciao!")
        break
    else:
        print("Scelta non valida. Riprova.")







