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



