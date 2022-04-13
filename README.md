### ToDo app men React, Spring Boot & MonhoDB

Ni ska skapa en enkel Todo app. Ni har fått er startkod för både frontend och backend. Det ni ska göra är att:

- Kunna skapa en todo/uppgift som sparas i databasen. Listan av todos ska visas i klienten.
- Kunna uppdatera en todo.
- Kunna ta bort en todo.

Börja med att skapa ert API och testa det innan ni kopplar ihop det med er klient. Använd axios för att göra requests till ert API.

När du har fått de första punkterna att fungera kan du börja i valfri ordning på extra listan:

- Skapa en sida för registrering av användare som du kopplar ihop med din databas och server.
- Kunna logga in en användare, du behöver skapa en sida för det här.
- Ge access till en speciell användare som bara får skapa nya todos, tex. admin är den enda som kan skapa en todo.
- Skapa en sida för användaren profil där du kan se inloggade användarens namn, epost och vilken typ av användare (admin, moderator eller user).

### API

User model och roll baserad auth finns redan tillgängligt för dig.
Du behöver skapa:

- En ny model för todo, fundera själv igenom vilka relevanta fält du vill ha till din todo. Mappa den till collection i databasen.
- Glöm inte att skapa ett repository interface för todo.
- Du behöver skapa nya endpoints, en controller, för din todo och mappa till "/api/todo" för klassen.
- Du behöver skapa en service som utför "jobbet" åt dig. Tex om du ska uppdatera en todo så behöver du först hitta den todo som matchar id.
- Testa ditt API i postman först innan du kopplar det til din klient så att du vet att alla dina endpoints fungerar som dom ska.
- När du kopplar ihop till din klient börja först med att verifiera att du faktiskt kan hämta rätt data innan du bygger "något vettigt".


