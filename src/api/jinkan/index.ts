const searchByName = async (name: string): Promise<any> => {
  const animeName: string = encodeURIComponent(name.trim());
  try {
    const res = await fetch(`https://api.jikan.moe/v4/anime?q=${animeName}`);
    const data: any = await res.json();
    return data;
  } catch (err) {
    console.log(err);
  }
};

export { searchByName };
