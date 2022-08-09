# Membuat file untuk menangkap standar keluar
rm -rf npm_install_output.txt
touch npm_install_output.txt

# Run NPM install (Menyebutkan kerentanan di akhir). Output masuk ke file.
npm install >> npm_install_output.txt

# Tangkap semua kerentanan
# search_term="found [0-9]{1,6} vulnerabilities ([0-9]{1,6} low, [0-9]{1,6} moderate, [0-9]{1,6} high)"

# Hanya kerentanan tinggi
search_term=", [0-9]{1,6} high)"

if grep -REo "$only_high_vulnerabilities" npm_install_output.txt
then
  if ! grep -o "found 0 vulnerabilities" npm_install_output.txt
  then
    echo "Yes, security vulnerabilities found."
    exit 1
  fi
fi

echo "Tidak, kerentanan keamanan ditemukan."
