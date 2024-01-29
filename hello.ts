import { Type, type Static } from '@sinclair/typebox';
import { Value } from '@sinclair/typebox/value';

enum Gender {
    Male = 1,
    Femail = 2
}

const user = Type.Object({
    username: Type.Union([Type.String(), Type.Number()]),
    gender: Type.Optional(Type.Enum(Gender))
})

console.log(user);

type User = Static<typeof user>

const user1: User = {
    username: 'Freewind',
    gender: Gender.Male,
}

console.log([...Value.Errors(user, { username: 111, gender: 123 })]);
