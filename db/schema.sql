CREATE DATABASE `univ`;

CREATE TABLE voyages (
	idVoyages INTEGER PRIMARY KEY AUTOINCREMENT, 
	country TEXT NOT NULL, 
	destination TEXT NOT NULL, 
	photo TEXT NOT NULL, 
	description TEXT NOT NULL
);

INSERT INTO "main"."voyages" ("country", "destination", "photo","description") VALUES ('France', 'Paris', 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Paris_Night.jpg/1920px-Paris_Night.jpg', 'Selon la géographie des régions naturelles de France, la ville de Paris se situe entre le Pays de France (rive droite) et le Hurepoix (rive gauche), la Seine correspondant à la limite entre les deux régions.');
INSERT INTO "main"."voyages" ("country", "destination", "photo","description") VALUES ('Australie', 'Sidney', 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/MG_3712_%2827151685103%29.jpg/1280px-MG_3712_%2827151685103%29.jpg', 'À larrivée des premiers Européens, il y avait 4 000 à 8 000 Aborigènes vivant dans la région de Sydney. Presque toutes les traces de leur habitat ont disparu à cause de lurbanisation ultérieure.');