await cookieStore.set('test-cookie', 'test-cookie-value');

let testCookie = await cookieStore.get('test-cookie');
console.log('Cookie value:', testCookie.value); // test-cookie-value

testCookie = await cookieStore.delete('test-cookie');
console.log('Cookie deleted', testCookie); // undefined

cookieStore.addEventListener('change', (event) => {
  console.log('---');
  console.log('Changed:', event.changed);
  console.log('Deleted:', event.deleted);
});

await cookieStore.set('another-cookie', 'another-value');
await cookieStore.delete('another-cookie');

await cookieStore.set('cookie-1', 'cookie-1-value');
await cookieStore.set('cookie-2', 'cookie-2-value');
const allCookies = await cookieStore.getAll();
console.log('All cookies:', allCookies);

await cookieStore.set({
    name: 'cookie-3',
    value: 'cookie-3-value',
    expires: new Date(Date.now() + 1000 * 60 * 60 * 24), // 1 day
});

const cookie3 = await cookieStore.get('cookie-3');
console.log('Cookie 3:', cookie3);

try {
    await cookieStore.set();
} catch (error) {
    console.log(error); // TypeError: Failed to execute 'set' on 'CookieStore': 1 argument required, but only 0 present.
}
