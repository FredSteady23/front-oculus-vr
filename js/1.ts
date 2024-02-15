async function f1(): Promise<void> {
    console.log('f1 runned');
  }
  
  function f2(): void {
    console.log('f2 runned');
  }
  
  function f3(): void {
    console.log('f3 runned');
  }
  
  setTimeout(() => { console.log('async timeout runned'); f1().then(f3); }, 0);
  
  setTimeout(() => { console.log('sync timeout runned'); f2(); }, 0);
  
  f1().then(f3);
  
  f2();