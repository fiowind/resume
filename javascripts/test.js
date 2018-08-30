let letterArray = ['a', 'b', 'c', 'd'....]

function factorial(num) {
  if (num === 0 || num === 1) {
    return 1;
  }
  else {
    return (num * factorial(num - 1));
  }
}

// 我说的那个思路
function findString(k) {
  let res = ''
  let n = 26, m = 0 // m是非固定组合中的第m个， n是非固定组合的字母数
  for (let i = 1; i < 26; i++) {
    let fac = factorial(i)
    if (k < fac) {
      n = i
      m = fac - k
    }
  }
  res += letterArray.splice(0, 26 - n).join('')
  for (let i = n; i > 0; i--) {
    let f = factorial(n - 1)
    let mk = m % f
    let l = mk ? Math.floor(m / f + 1) : (m / f) // n中的第l个字母
    m = mk ? mk : f
    res += letterArray.splice(l, 1)
  }
  return res
}

// 你说的那个思路
function findString(k) {
  let res = ''
  let m = k // 所考虑字母数组合的的第m个
  for(let i = 25; i > 0; i--) {
    let f = factorial(i)
    let mk = m % f
    let l = mk ? Math.floor(m / f + 1) : (m / f)
    m = mk ? mk : f
    res += letterArray.splice(l, 1)
  }
}
