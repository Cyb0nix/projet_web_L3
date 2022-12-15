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

