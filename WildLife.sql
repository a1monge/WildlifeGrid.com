USE WildLife;
drop TABLE species;
drop TABLE sightings;
SELECT *
FROM users;
SELECT *
FROM sightings;
SELECT *
FROM species;
CREATE TABLE sightings (
    sighting_id INT AUTO_INCREMENT PRIMARY KEY,
    location VARCHAR(255),
    date_sighted DATE,
    species_id INT,
    CONSTRAINT fk_species_id FOREIGN KEY (species_id) REFERENCES species(species_id)
);
INSERT INTO sightings (location, date_sighted, species_id)
VALUES ('Lubbock, Texas', '2024-02-05', 1000000),
    ('Lubbock, Texas', '2024-02-10', 1000001),
    ('Lubbock, Texas', '2024-02-11', 1000002);
    
drop TABLE species;
CREATE TABLE species (
    species_id INT PRIMARY KEY,
    species_name VARCHAR(255),
    scientific_name VARCHAR(255),
    sightings INT,
    kingdom VARCHAR(255)
);
INSERT INTO species (
        species_id,
        species_name,
        scientific_name,
        sightings,
        kingdom
    )
VALUES (
        1000000,
        'Black tailed Prairie Dog',
        'Cynomys ludovicianus',
        33,
        'Animal'
    ),
    (
        1000001,
        'Plains Leopard Frog',
        'Lithobates blairi',
        21,
        'Animal'
    ),
    (
        1000002,
        'Prairie Lizard',
        'Sceloporus consobrinus',
        8,
        'Animal'
    ),
    (
        1000003,
        'White-crowned sparrow',
        'Zonotrichia leucophrys',
        4,
        'Animal'
    ),
    (
        2000000,
        'Silverleaf Nightshade',
        'Soianum elaegnifolium',
        25,
        'Plant'
    ),
    (
        2000001,
        'Tahoka Daisy',
        'Machaeranthera tanacetifolia',
        13,
        'Plant'
    ),
    (
        2000002,
        'Spiny Goldenweed',
        'Xanthisma spinulosum',
        17,
        'Plant'
    ),
    (
        2000003,
        'Field Bindweed',
        'Convolvulus arvensis',
        3,
        'Plant'
    );
INSERT INTO species (
        species_id,
        species_name,
        scientific_name,
        kingdom,
        sightings
    )
VALUES (
        1000019,
        'NYC Central Park Squirrel',
        'Sciurus carolinensis',
        'Animal',
        17
    ),
    (
        2000017,
        'London Rose',
        'Rosa gallica',
        'Plant',
        18
    ),
    (
        1000020,
        'Rio de Janeiro Capybara',
        'Hydrochoerus hydrochaeris',
        'Animal',
        19
    ),
    (
        2000018,
        'Sydney Eucalyptus',
        'Eucalyptus globulus',
        'Plant',
        20
    ),
    (
        1000021,
        'Nairobi Lion',
        'Panthera leo',
        'Animal',
        21
    ),
    (
        2000019,
        'Paris Oak Tree',
        'Quercus robur',
        'Plant',
        22
    ),
    (
        1000022,
        'Tokyo Snow Monkey',
        'Macaca fuscata',
        'Animal',
        23
    ),
    (
        2000020,
        'Cape Town Baobab',
        'Adansonia digitata',
        'Plant',
        24
    ),
    (
        1000023,
        'Sydney Cockatoo',
        'Cacatua galerita',
        'Animal',
        25
    ),
    (
        2000021,
        'NYC Central Park Oak',
        'Quercus alba',
        'Plant',
        26
    ),
    (
        1000024,
        'London Pigeon',
        'Columba livia',
        'Animal',
        27
    ),
    (
        2000022,
        'Rio de Janeiro Orchid',
        'Orchidaceae',
        'Plant',
        28
    ),
    (
        1000025,
        'Cape Town Baboon',
        'Papio ursinus',
        'Animal',
        29
    ),
    (
        2000023,
        'Tokyo Sakura',
        'Prunus serrulata',
        'Plant',
        30
    ),
    (
        1000026,
        'Paris Rat',
        'Rattus norvegicus',
        'Animal',
        31
    ),
    (
        2000024,
        'Nairobi Acacia Tree',
        'Acacia nilotica',
        'Plant',
        32
    ),
    (
        1000027,
        'Moscow Brown Bear',
        'Ursus arctos',
        'Animal',
        33
    ),
    (
        2000025,
        'Sydney Waratah',
        'Telopea speciosissima',
        'Plant',
        34
    ),
    (
        1000028,
        'London Fox',
        'Vulpes vulpes',
        'Animal',
        35
    ),
    (
        2000026,
        'NYC Central Park Maple',
        'Acer saccharum',
        'Plant',
        36
    );
DROP TABLE users;
CREATE TABLE users (
    user_id INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(255),
    email VARCHAR(255),
    password VARCHAR(255)
);
INSERT INTO users (user_id, username, email, password)
VALUES (1, 'Ericdchiu', 'ericchiu@ttu.edu', 'password'),
    (2, 'JaKobeG', 'jakgriff@ttu.edu', 'password'),
    (3, 'AlexMonge', 'alexm@gmail.com', 'password'),
    (
        4,
        'VaiteAsmi',
        'vaitemi@hotmail.com',
        'password'
    ),
    (5, 'CerdaV', 'victoriac@yahoo.com', 'password'),
    (6, 'SilvaA', 'adrisilva@gmail.com', 'password');
INSERT INTO users (user_id, username, email)
VALUES (15, 'NYCWatcher', 'nycwatcher@example.com'),
    (16, 'LondonSpotter', 'londonspotter@example.com'),
    (17, 'RioExplorer', 'rioexplorer@example.com'),
    (18, 'SydneySeeker', 'sydneyseeker@example.com'),
    (
        19,
        'NairobiTracker',
        'nairobitracker@example.com'
    ),
    (20, 'ParisObserver', 'parisobserver@example.com'),
    (21, 'TokyoWatcher', 'tokyowatcher@example.com'),
    (
        22,
        'CapeTownViewer',
        'capetownviewer@example.com'
    ),
    (
        23,
        'SydneyDiscoverer',
        'sydneydiscoverer@example.com'
    ),
    (24, 'NYCExplorer', 'nycexplorer@example.com'),
    (25, 'LondonWatcher', 'londonwatcher@example.com'),
    (26, 'RioWatcher', 'riowatcher@example.com'),
    (
        27,
        'CapeTownExplorer',
        'capetownexplorer@example.com'
    ),
    (28, 'TokyoSpotter', 'tokyospotter@example.com'),
    (29, 'ParisSeeker', 'parisseeker@example.com'),
    (
        30,
        'NairobiObserver',
        'nairobiobserver@example.com'
    ),
    (31, 'MoscowWatcher', 'moscowwatcher@example.com'),
    (32, 'SydneyTracker', 'sydneytracker@example.com'),
    (
        33,
        'LondonDiscoverer',
        'londondiscoverer@example.com'
    ),
    (34, 'NYCSpotter', 'nycspotter@example.com');