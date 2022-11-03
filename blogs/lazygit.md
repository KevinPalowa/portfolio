---
title: "Menggunakan GIT dengan mudah dengan Lazygit"
thumbnail: /git.png
thumbnailCredit: Photo by Lautaro Andreani on Unsplash
summary: Menggunakan terminal seperti hengker.
tags: [git, tools]
author: Kevin Palowa
createdAt: "2022-10-30"
---

## Latar Belakang

Pernah ga sih kalian pake git dan mau menambahkan file ke stage tapi bingung karena terlalu banyak yang harus di ketik? Untuk mengatasi masalah tersebut kita bisa menggunakan [Lazygit](https://github.com/jesseduffield/Lazygit).

## Cara Menginstall

### Windows

#### Menggunakan scoop

```
# Add the extras bucket
scoop bucket add extras

# Install lazygit
scoop install lazygit
```

#### Menggunakan choco

```
choco install lazygit
```

### Linux

#### Arch

```
pacman -S lazygit
```

### Fedora and RHEL

```
sudo dnf copr enable atim/lazygit -y
sudo dnf install lazygit
```

### Ubuntu

```
LAZYGIT_VERSION=$(curl -s "https://api.github.com/repos/jesseduffield/lazygit/releases/latest" | grep '"tag_name":' |  sed -E 's/.*"v*([^"]+)".*/\1/')
```

```
curl -Lo lazygit.tar.gz "https://github.com/jesseduffield/lazygit/releases/latest/download/lazygit_${LAZYGIT_VERSION}_Linux_x86_64.tar.gz"
```

```
sudo tar xf lazygit.tar.gz -C /usr/local/bin lazygit
```

Pastikan lazygit terinstall dengan menjalankan.

```
lazygit
```

## Cara Menggunakan

### Commit

Tekan `spasi` untuk memasukan file ke staged, untuk memasukan semua file ke staged tekan `a`. Dan untuk commit tekan `c` dan masukan commit message

![commit](/images/post/test.gif)

## Penutup

Sebelum menggunakan tools tambahan seperti [Lazygit](https://github.com/jesseduffield/Lazygit) jangan lupa juga kita harus menguasi git sebelumnykarena [Lazygit](https://github.com/jesseduffield/Lazygit) ini adalah alat pembantu git bukan untuk menggantikan git.
