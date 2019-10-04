
export function fetch(url: string): Promise<any> {
  return new Promise<any>((resolve, reject) => {
    setTimeout(
      () => {
        reject(new Error('404'));
      },
      1,
    );
  });
}
