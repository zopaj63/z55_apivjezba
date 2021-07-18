# Vježba: API i fetch

Doradite funkcionalnosti aplikacije sa zaslona:
1. Dohvatite svoj GitHub profil
2. Kreirajte novi h1 element (putem JS) i u njega upišite vaš login iz response objekta. Dodajte element na stranicu.
3. Kreirajte novi anchor element (putem JS) i u njemu koristite link na vaš profil. Tekst linka treba biti "Visit my GitHub page". Dodajte element na stranicu.
4. Kreirajte novi image element (putem JS) i u njemu koristite source vaše slike GitHub profila iz response objekta. Stavite alt text "<username> profile image".  <username> zamijeniti sa vašim korisničkim imenom. Dodajte element na stranicu.

DS:
- moraš staviti svoj kod u isti scope u kojem se nalazi data varijabla, odnosno argument u ovom slučaju
- dakle json.response() vraća promise kojeg mi stavljamo nazad u lanac
- taj promise se resolvea sa JSON objektom, što znači da možemo naš handler definirati s parametrom i taj JSON objekt će se spremiti pod taj parametar. to je naš data.