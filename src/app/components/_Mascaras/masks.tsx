export const maskCPF = (v: string, string?: any) => {
  v = v.replace(/\D/g, "");

  if (v.length <= 11) {
    v = v.replace(/(\d{3})(\d)/, "$1.$2");
    v = v.replace(/(\d{3})(\d)/, "$1.$2");
    v = v.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
  } else {
    // v = v.substring(0, 14); // limita em 14 números
    // v = v.replace(/^(\d{2})(\d)/, "$1.$2");
    // v = v.replace(/^(\d{2})\.(\d{3})(\d)/, "$1.$2.$3");
    // v = v.replace(/\.(\d{3})(\d)/, ".$1/$2");
    // v = v.replace(/(\d{4})(\d)/, "$1-$2");
    return;
  }

  return v;
};

export const maskTel = (v: string, string?: any) => {
  v = v.replace(/\D/g, "");

  if (v.length <= 11) {
    v = v.replace(/(\d{2})(\d)/, "($1) $2"); // DDD + espaço
    v = v.replace(/(\d{1})(\d{4})(\d{4})$/, "$1 $2 $3");
  } else {
    return;
  }

  return v;
};
