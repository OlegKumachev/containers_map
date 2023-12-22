import ErrorRepository from "../app";

test('test 1', () => {
    const val = new ErrorRepository();
    val.addError(1, 'Ошибка выбора');
    expect(val.translate(1)).toBe('Ошибка выбора');
});

test('test 2', () => {
    const val = new ErrorRepository();
    expect(val.translate(2)).toBe('Unknown error');

});

