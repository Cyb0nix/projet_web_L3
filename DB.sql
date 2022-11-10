create table clients
(
    Client_ID int auto_increment
        primary key,
    Name      varchar(50) not null,
    Number    varchar(20) not null,
    Email     varchar(50) not null
);

create table equipement
(
    Equipement_ID int auto_increment
        primary key,
    Name          varchar(50)  not null,
    `Condition`   varchar(255) not null,
    Type          varchar(50)  not null,
    Purchase_Date date         not null,
    Available     tinyint(1)   not null,
    Storage_Place varchar(20)  not null,
    Renting_Rate  int          not null,
    Bail_Rate     int          not null
);

create table project
(
    Project_ID    int auto_increment
        primary key,
    Type          varchar(20) not null,
    starting_date date        not null,
    ending_date   date        not null,
    Is_Paid       tinyint(1)  not null,
    Benefits      int         not null,
    state         varchar(50) not null,
    Client        int         null,
    constraint project_ibfk_1
        foreign key (Client) references clients (Client_ID)
);

create table equipementused
(
    EquipementUsed_ID int auto_increment primary key,
    Equipement_ID  int          not null,
    Project_ID     int          not null,
    StartCondition varchar(255) not null,
    EndCondition   varchar(255) not null,
    constraint equipementused_ibfk_1
        foreign key (Equipement_ID) references equipement (Equipement_ID),
    constraint equipementused_ibfk_2
        foreign key (Project_ID) references project (Project_ID)
);

create index Project_ID
    on equipementused (Project_ID);

create index Client
    on project (Client);

create table skills
(
    Skill_ID int auto_increment
        primary key,
    Skill    varchar(50) not null
);

create table staff
(
    Member_ID  int auto_increment
        primary key,
    Name       varchar(50) not null,
    Discord_ID varchar(20) not null,
    Email      varchar(50) not null,
    Phone      varchar(20) not null,
    Role       varchar(20) not null,
    Join_Date  date        not null,
    Is_formed  tinyint(1)  not null
);

create table assigments
(
    Assigments_ID int auto_increment primary key,
    Project_ID int         not null,
    Member_ID  int         not null,
    Task       varchar(50) not null,
    constraint assigments_ibfk_1
        foreign key (Project_ID) references project (Project_ID),
    constraint assigments_ibfk_2
        foreign key (Member_ID) references staff (Member_ID)
);

create index Member_ID
    on assigments (Member_ID);

create table staffskill
(
    StaffSkill_ID int auto_increment primary key,
    Skill_ID  int not null,
    Member_ID int not null,
    constraint Skill_ID
        foreign key (Skill_ID) references skills (Skill_ID),
    constraint Staff_ID
        foreign key (Member_ID) references staff (Member_ID)
);

