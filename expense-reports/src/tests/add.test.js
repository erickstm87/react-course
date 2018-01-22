const add = (a, b) => a + b;
const generateGreeting = (name = 'Anonymous') => `Hello ${name}!`;

test('should add two numbers', () => {
    const result = add(3, 4);

    expect(result).toBe(7);
});

test('should generate a greeting with proper names and everything', () => {
    const greeting = generateGreeting('tomas');

    expect(greeting).toBe('Hello tomas!');
});

test('should generate anonymous if no name', () => {
    const greeting = generateGreeting();
    
    expect(greeting).toBe('Hello Anonymous!');
})