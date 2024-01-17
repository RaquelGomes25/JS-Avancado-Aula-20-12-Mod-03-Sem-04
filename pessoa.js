class Pessoa {  //cada Classe é um escopo

    x;   //Global da classe que pode ser usada em qualquer função dentro da classe /exemplo de uma variável global que poderá ser usada dentro desssa Classe, tanto no getNome getEndereco get Cpf

    getNome(a) {
        return a;
    }

   getEndereco(a) {
        return a;
    }

   getCpf(a) {
        return a;
    }
}

class Passageiro {
    pessoa = new Pessoa();
}

class Passagem {
    emitirBilhete();
    checkin(passageiro);
}