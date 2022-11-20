CREATE TABLE usuarios(
    -- primary key-> chave primaria
    id SERIAL PRIMARY KEY, 

    -- not null-> entrada n pode ser vazia/nula
    nome varchar(50) NOT NULL, 
    
    -- ultima entrada n tem virgula
    email varchar(20) NOT NULL,

    senha varchar(20) NOT NULL,

    nascimento DATE NOT NULL

);

ALTER TABLE usuarios ADD UNIQUE (email);
