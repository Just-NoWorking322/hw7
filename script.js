class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    printInfo() {
        console.log(`Имя: - ${this.name}; возраст: ${this.age}`);
    }
}

class Student extends User {
    #password
    constructor(name, age, username, password) {
        super(name, age);
        this.username = username;
        this.#password = password;
    }

    printInfo(password) {
        if (password === this.#password) {
            console.log(`Имя: - ${this.name}; возраст: ${this.age}; никнейм: ${this.username}`);
        } else {
            console.log("Неверный пароль");
        }
    }
}


const user1 = new User("Алишер", 25);
user1.printInfo();

const student1 = new Student("Болотбек", 20, "bolot123", "password123");
student1.printInfo("password123");
student1.printInfo("wrong_password"); 


// Создайте класс User.У вас должны быть поля name и age.Значение они должны получить через constructor.Добавьте метод print который в консоли покажет сообщение в следующем формате: имя - ${ name }; возраст ${ age }

// Доп задание: Создайте класс  Student который наследуется от вашего User.Добавьте поля username и password.Далее password должен быть приватным и новые поля тоже получают значение через constructor.А метод print теперь показывает сообщение только с проверкой пароли.
