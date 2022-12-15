create table equipment
(
    equipmentID  int auto_increment
        primary key,
    name         varchar(50)  not null,
    state        varchar(255) not null,
    type         varchar(50)  not null,
    purchaseDate date         not null,
    available    tinyint(1)   not null,
    storagePlace varchar(20)  not null,
    rentingRate  int          not null,
    bailRate     int          not null
);

create table project
(
    projectID    int auto_increment
        primary key,
    projectName  varchar(30) not null,
    type         varchar(20) not null,
    startingDate date        not null,
    endingDate   date        not null,
    isPaid       tinyint(1)  not null,
    benefits     int         not null,
    state        varchar(50) not null,
    client       varchar(20) null
);

create table equipmentused
(
    equipmentUsedID int auto_increment
        primary key,
    equipmentID     int         not null,
    projectID       int         not null,
    startCondition  varchar(20) null,
    endCondition    varchar(20) null,
    constraint equipmentID
        foreign key (equipmentID) references equipment (equipmentID)
            on update cascade on delete cascade,
    constraint projectID
        foreign key (projectID) references project (projectID)
            on update cascade on delete cascade
);

create table skills
(
    skillID int auto_increment
        primary key,
    skill   varchar(50) not null
);

create table staff
(
    staffID   int auto_increment
        primary key,
    name      varchar(50) not null,
    discordID varchar(20) not null,
    email     varchar(50) not null,
    phone     varchar(20) not null,
    role      varchar(20) not null,
    joinDate  date        not null,
    isFormed  tinyint(1)  not null
);

create table assigments
(
    assignmentID int auto_increment
        primary key,
    staffID      int         not null,
    projectID    int         not null,
    task         varchar(20) not null,
    constraint assigments_project_null_fk
        foreign key (projectID) references project (projectID)
            on update cascade on delete cascade,
    constraint assigments_staff_null_fk
        foreign key (staffID) references staff (staffID)
            on update cascade on delete cascade
);

create table staffskills
(
    staffSkillsID int auto_increment
        primary key,
    skillID       int null,
    staffID       int not null,
    constraint staffskills_skills_null_fk
        foreign key (skillID) references skills (skillID)
            on update cascade on delete cascade,
    constraint staffskills_staff_null_fk
        foreign key (staffID) references staff (staffID)
            on update cascade on delete cascade
);

create table users
(
    userID      int auto_increment
        primary key,
    userCreated datetime     not null,
    username    varchar(20)  not null,
    userEmail   varchar(40)  null,
    userRole    varchar(20)  not null,
    userPass    varchar(100) not null
);

INSERT INTO users VALUES (NULL, now(), 'admin', 'admin@toudoom.fr', 'ADMIN', sha2(concat(now(), 'adminpass'), 224) );
INSERT INTO users VALUES (NULL, now(), 'user', 'user@toudoom.fr', 'USER', sha2(concat(now(), 'userpass'), 224) );

INSERT INTO equipment (equipmentID, name, state, type, purchaseDate, available, storagePlace, rentingRate, bailRate) VALUES (1, 'Blackmagic ATEM Mini', 'New', 'Video', '2021-11-01', 1, 'Video Flight Case', 20, 250);
INSERT INTO equipment (equipmentID, name, state, type, purchaseDate, available, storagePlace, rentingRate, bailRate) VALUES (2, 'Blackmagic Studio 4k plus', 'New', 'Camera', '2021-11-10', 1, 'Video Flight Case', 200, 1270);
INSERT INTO equipment (equipmentID, name, state, type, purchaseDate, available, storagePlace, rentingRate, bailRate) VALUES (5, 'Sony A6000', 'New', 'Camera', '2022-12-29', 1, 'Flight', 799, 400);
INSERT INTO equipment (equipmentID, name, state, type, purchaseDate, available, storagePlace, rentingRate, bailRate) VALUES (6, 'Godox 60W', 'New', 'Light', '2022-06-14', 1, 'Flight', 200, 300);
INSERT INTO equipment (equipmentID, name, state, type, purchaseDate, available, storagePlace, rentingRate, bailRate) VALUES (7, 'Control PC', 'New', 'Video', '2022-06-14', 1, 'Office', 2000, 3000);
INSERT INTO equipment (equipmentID, name, state, type, purchaseDate, available, storagePlace, rentingRate, bailRate) VALUES (8, 'Screen 27"', 'New', 'Video', '2022-06-06', 1, 'Office', 100, 300);

INSERT INTO project (projectID, projectName, type, startingDate, endingDate, isPaid, benefits, state, client) VALUES (1, 'Grand Rex', 'Regie', '2022-12-21', '2022-12-28', 0, 0, 'Finish', '1');
INSERT INTO project (projectID, projectName, type, startingDate, endingDate, isPaid, benefits, state, client) VALUES (2, 'RDD', 'Capta', '2022-11-01', '2022-11-12', 1, 1500, 'Finish', '2');
INSERT INTO project (projectID, projectName, type, startingDate, endingDate, isPaid, benefits, state, client) VALUES (4, 'test', 'regie', '2022-12-08', '2022-12-13', 0, 0, 'Started', '0');
INSERT INTO project (projectID, projectName, type, startingDate, endingDate, isPaid, benefits, state, client) VALUES (8, 'test', 'Régie', '2022-12-13', '2022-12-16', 0, 0, 'Preparation', '1');

INSERT INTO staff (staffID, name, discordID, email, phone, role, joinDate, isFormed) VALUES (1, 'Cédric', 'Cybonix#6723', 'cedric.yoganathan@toudoom.fr', '0652741648', 'President', '2022-02-11', 1);
INSERT INTO staff (staffID, name, discordID, email, phone, role, joinDate, isFormed) VALUES (2, 'Florent', 'florent#2323', 'florent.cotton@toudoom.fr', '0673837383', 'Secretaire', '2022-02-13', 1);
INSERT INTO staff (staffID, name, discordID, email, phone, role, joinDate, isFormed) VALUES (4, 'Thibaut', 'Thibaut#2323', 'thibaut.genet@toudoom.fr', '0757353683', 'Head of Marketing', '2022-12-20', 1);

INSERT INTO skills (skillID, skill) VALUES (1, 'Lighting');
INSERT INTO skills (skillID, skill) VALUES (2, 'Video');
INSERT INTO skills (skillID, skill) VALUES (3, 'Editing');
INSERT INTO skills (skillID, skill) VALUES (4, 'sounding');

INSERT INTO assigments (assignmentID, staffID, projectID, task) VALUES (1, 1, 1, 'Real');
INSERT INTO assigments (assignmentID, staffID, projectID, task) VALUES (3, 2, 1, 'Prod');
INSERT INTO assigments (assignmentID, staffID, projectID, task) VALUES (4, 1, 2, 'Prod');
INSERT INTO assigments (assignmentID, staffID, projectID, task) VALUES (5, 2, 2, 'Real');
INSERT INTO assigments (assignmentID, staffID, projectID, task) VALUES (6, 1, 4, 'Real');
INSERT INTO assigments (assignmentID, staffID, projectID, task) VALUES (7, 4, 4, 'PROD');
INSERT INTO assigments (assignmentID, staffID, projectID, task) VALUES (8, 4, 8, 'Real');
INSERT INTO assigments (assignmentID, staffID, projectID, task) VALUES (9, 2, 8, 'Prod');

INSERT INTO equipmentused (equipmentUsedID, equipmentID, projectID, startCondition, endCondition) VALUES (2, 2, 1, null, null);
INSERT INTO equipmentused (equipmentUsedID, equipmentID, projectID, startCondition, endCondition) VALUES (3, 1, 1, 'New', 'New');
INSERT INTO equipmentused (equipmentUsedID, equipmentID, projectID, startCondition, endCondition) VALUES (4, 5, 1, 'New', 'impact');
INSERT INTO equipmentused (equipmentUsedID, equipmentID, projectID, startCondition, endCondition) VALUES (5, 2, 2, null, null);
INSERT INTO equipmentused (equipmentUsedID, equipmentID, projectID, startCondition, endCondition) VALUES (7, 7, 2, null, null);
INSERT INTO equipmentused (equipmentUsedID, equipmentID, projectID, startCondition, endCondition) VALUES (8, 8, 2, null, null);
INSERT INTO equipmentused (equipmentUsedID, equipmentID, projectID, startCondition, endCondition) VALUES (9, 2, 4, null, null);
INSERT INTO equipmentused (equipmentUsedID, equipmentID, projectID, startCondition, endCondition) VALUES (10, 1, 4, null, null);
INSERT INTO equipmentused (equipmentUsedID, equipmentID, projectID, startCondition, endCondition) VALUES (11, 7, 4, null, null);
INSERT INTO equipmentused (equipmentUsedID, equipmentID, projectID, startCondition, endCondition) VALUES (12, 2, 8, null, null);
INSERT INTO equipmentused (equipmentUsedID, equipmentID, projectID, startCondition, endCondition) VALUES (13, 7, 8, null, null);
INSERT INTO equipmentused (equipmentUsedID, equipmentID, projectID, startCondition, endCondition) VALUES (14, 8, 8, null, null);

INSERT INTO staffskills (staffSkillsID, skillID, staffID) VALUES (13, 1, 1);
INSERT INTO staffskills (staffSkillsID, skillID, staffID) VALUES (14, 2, 1);
INSERT INTO staffskills (staffSkillsID, skillID, staffID) VALUES (15, 3, 1);
INSERT INTO staffskills (staffSkillsID, skillID, staffID) VALUES (16, 1, 2);
INSERT INTO staffskills (staffSkillsID, skillID, staffID) VALUES (17, 2, 2);
INSERT INTO staffskills (staffSkillsID, skillID, staffID) VALUES (18, 2, 4);
INSERT INTO staffskills (staffSkillsID, skillID, staffID) VALUES (19, 3, 4);


