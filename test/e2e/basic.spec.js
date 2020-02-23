describe('todoリストのテスト', () => {
  // すべてのテストの前に実行される
  beforeAll(async () => {
    // pageインスタンスに指定したアドレスのページを入れる
    await page.goto('http://localhost:8080');
  });

  afterAll(() => {
    // browser.close()
  })

  it('todoリストが開けているか？', async () => {
    //   class tagで指定した場合は配列で返って来る
    expect(await  page.$$eval('h1', list => list[0].innerText)).toEqual('Todoリスト!');
  });

  it('todoリストに追加できるか？', async () => {
    const text = 'todo1'
    // テキストボックスにtextを入力
    await page.type('#todo-text', text)
    // ボタンを押してtodoを追加
    await page.click('#add-item')
    // todoリストに要素が追加されたかの確認
    expect(await page.$$eval('.todo-text', list => list[0].innerText)).toEqual(text)
  })

  it('todoリストから要素を削除できるか?', async () => {
    const text = 'todo1'
    await page.type('#todo-text', text)
    await page.click('#add-item')
    await page.click('#delete-item')
    expect(await page.$$eval('.todo-text', list => list)).toEqual([])
  })
});
