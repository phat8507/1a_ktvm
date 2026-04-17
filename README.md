# 1A KTVM Microsite

Microsite thuyet trinh tuong tac cho chu de **"Khung hoang Kinh te, Phe 1A: Market Failure & Long Tham cua Thi Truong"**. Project duoc lam bang `HTML + CSS + JavaScript thuan`, chay duoc khi mo local hoac deploy bang GitHub Pages.

## Chay local

Mo truc tiep `index.html`, hoac dung Live Server neu muon reload nhanh trong luc chinh giao dien.

## Sua noi dung

Toan bo noi dung chinh nam trong `data.js`, bao gom:

- metadata chung
- glossary thuat ngu
- sections
- chart datasets
- sources cho tung section
- ghi chu chuan hoa du lieu
- cau hinh vung anh / placeholder

Neu muon doi text, so lieu, thu tu card, caption chart hoac nguon, hay sua truc tiep trong `data.js`.

## Sua nguon

Moi section co mang `sources` trong `data.js`. O do co:

- ten nguon ngan
- du lieu nao lay tu nguon do
- ghi chu logic chuan hoa neu co

## Hinh anh va placeholder

Dat anh trong thu muc:

- `assets/images/`

Ten file anh mau dang duoc map san trong code:

- `assets/images/cover-hero.jpg`
- `assets/images/hook-worker.jpg`
- `assets/images/hanoi-apartment.jpg`
- `assets/images/red-sea-logistics.jpg`
- `assets/images/svb-bank.jpg`
- `assets/images/lehman-2008.jpg`
- `assets/images/export-factory.jpg`
- `assets/images/real-estate-bonds.jpg`
- `assets/images/bond-project-gap.jpg`
- `assets/images/final-synthesis.jpg`

Neu file anh chua ton tai, layout van giu nguyen va hien thi placeholder card co nhan de thay.

Section hien dang dung placeholder mac dinh:

- cover
- hook
- co che 1, 2, 3
- BDS Viet Nam
- cu soc xuat khau
- Bien Do
- SVB
- khung hoang 2008
- ket luan

De thay anh:

1. dat file anh that dung ten trong `assets/images/`
2. hoac sua duong dan anh ngay trong object `media` cua section tuong ung trong `data.js`

## Deploy GitHub Pages

1. push toan bo file len branch `main`
2. vao `Settings -> Pages`
3. chon source la branch `main` va thu muc `/root`
4. luu lai, GitHub Pages se build site tinh nay
