//import express
import express from "express";

//init express router
const router = express.Router();

router.get('/biodata/:nama/:tempat/:tanggal/:jenis/:Agama/:Alamat/:telepon/:email/:hobi/:cita', (req,res) => {
    var Nama = req.params.nama;
    var Tempat_Lahir = req.params.tempat;
    var Tanggal_Lahir = req.params.tanggal;
    var Jenis_Kelamin = req.params.jenis;
    var Agama = req.params.Agama; 
    var Alamat = req.params.Alamat;
    var Telepon = req.params.telepon;
    var Email = req.params.email;
    var Hobi = req.params.hobi;
    var Cita_cita = req.params.cita;
    res.send('Nama :  ' + Nama + '<br>' +
    'Tempat Lahir : ' + Tempat_Lahir + '<br>' +
    'Tanggal Lahir : ' + Tanggal_Lahir + '<br>' +
    'Jenis Kelamin :  ' + Jenis_Kelamin + '<br>' +
    'Agama :  ' + Agama + '<br>' +
    'Alamat : ' + Alamat + '<br>' +
    'Telepon : ' + Telepon + '<br>' +
    'Email : ' + Email + '<br>' +
    'Hobi : ' + Hobi + '<br>' +
    'Cita-cita : ' + Cita_cita );
});
router.get('/aritmatika', (req, res) => {
    var bilangan1 = 10;
    var bilangan2 = 5;
    var tambah = bilangan1 + bilangan2;
    var kurang = bilangan1 - bilangan2;
    var bagi = bilangan1 / bilangan2;
    var kali = bilangan1 * bilangan2;
   res.send(
    '<h3>Penjumlahan</h3>' +
    'Bilangan ke 1 : ' + bilangan1 + '<br>' +
    'Bilangan ke 2 : ' + bilangan2 + '<br>' +
    'Hasil : ' + tambah + '<hr>' + 
    '<h3>Pengurangan</h3>' + 
    'Bilangan ke 1  : ' + bilangan1 + '<br>' +
    'Bilangan ke 2  : ' + bilangan2 + '<br>' +
    'Hasil : ' + kurang + '<hr>' +
    '<h3>Pembagian</h3>' +
    'Bilangan ke 1  : ' + bilangan1 + '<br>' +
    'Bilangan ke 2  : ' + bilangan2 + '<br>' +
    'Hasil : ' + bagi + '<hr>' +
    '<h3>Perkalian</h3>' +
    'Bilangan ke 1  : ' + bilangan1 + '<br>' +
    'Bilangan ke 2  : ' + bilangan2 + '<br>' +
    'Hasil : ' + kali + '<hr>' 
   ); 
});
router.get('/bangun_datar', (req,res) => {
    var sisi1 = 8;
    var sisi2 = 8;
    var segi = sisi1 * sisi2;
    var panjang = 7;
    var lebar = 9;
    var pp = panjang * lebar;
    var set = 1/2;
    var alas = 6;
    var tinggi = 8;
    var luas = set * alas * tinggi;
    var phi = 3.14
    var jari = 9;
    var luasl = phi * jari * jari;
    res.send(
        '<h3>Persegi</h3>' +
        'Sisi ke 1 : ' + sisi1 + '</br>' + 
        'Sisi ke 2 : ' + sisi2 + '</br>' + 
        'Hasil : ' + segi + '<hr>' +
        '<h3>Persegi Panjang</h3>' +
        'Panjang : ' + panjang + '</br>' + 
        'Lebar : ' + lebar + '</br>' + 
        'Hasil : ' + pp + '<hr>' +
        '<h3>Segitiga</h3>' +
        'Setengah : ' + set + '</br>' + 
        'Alas : ' + alas + '</br>' +
        'Tinggi : ' + tinggi + '</br>' + 
        'Hasil : ' + luas + '<hr>' + 
        '<h3>Lingkaran</h3>' +
        'Phi : ' + phi + '</br>' + 
        'Jari-jari : ' + jari + '</br>' + 
        'Hasil : ' + luasl + '<hr>'
    )
});
router.get('/tes/:nama/:kelas/:pts/:pas', (req,res) => {
    var nama = req.params.nama;
    var kelas = req.params.kelas;
    var pts = parseInt(req.params.pts);
    var pas = parseInt(req.params.pas);

    var rapot = (pts + pas) / 2;
    if (rapot >= 90 && rapot <= 100) {
        var grade = 'Grade A';
    } else if (rapot >= 80 ) {
        var grade = 'Grade B';
    } else if (rapot >= 70 ) {
        var grade = 'Grade C';
    } else if (rapot >= 60 ) {
        var grade = 'Grade D';
    } else if (rapot >= 50 ) {
        var grade = 'Grade E';
    } else if (rapot >= 0 ) {
        var grade = 'Sing Getol Cep !!!!!!!';
    } else {
        var grade = 'Ngaco Mere Nilai Teh';
    }

    res.send(
        'nama : ' + nama  + '<br>' +
        'kelas : ' + kelas  + '<br>'+
        'Nilai PTS : ' + pts  + '<br>' +
        'Nilai PAS : ' + pas  + '<br>' +
        'Nilai Rapot : ' + rapot + '<br>' +
        'Keterangan : ' + grade
    )
});

router.get('/bersarang/:nama/:jurusan/:kelas', (req,res) => {

    var nama = req.params.nama;
    var jurusan = req.params.jurusan;
    var kelas = req.params.kelas

    if (jurusan == 'RPL') {
        if (kelas == '10 RPL') {
            var ket = 'Anda Kelas 10 RPL';
        } else if (kelas == '11 RPL') {
            var ket = 'Anda Kelas 11 RPL';
        } else if (kelas == '12 RPL') {
            var ket = 'Anda Kelas 12 RPL';
        } else {
            var ket = 'Anda Alumni Ngabsss !'
        }
    } else if (jurusan == 'TKRO') {
        if (kelas == '10 TKRO') {
            var ket = 'Anda Kelas 10 TKRO';
        } else if (kelas == '11 TKRO') {
            var ket = 'Anda Kelas 11 TKRO';
        } else if (kelas == '12 TKRO') {
            var ket = 'Anda Kelas 12 TKRO';
        } else {
            var ket = 'Anda Alumni Ngabsss !'
        }
    } else if (jurusan == 'TBSM') {
        if (kelas == '10 TBSM') {
            var ket = 'Anda Kelas 10 TBSM';
        } else if (kelas == '11 TBSM') {
            var ket = 'Anda Kelas 11 TBSM';
        } else if (kelas == '12 TBSM') {
            var ket = 'Anda Kelas 12 TBSM';
        } else {
            var ket = 'Anda Alumni Ngabsss !'
        }
    } else {
        var ket = 'Jurusan Unidentified';
    }
    res.send(
        'Nama : ' + nama + '<br>' + 
        'Jurusan : ' + ket + '<br>' +
        'Kelas : ' + kelas
    );
});

router.get('/latihan/:Nama/:Tanggal/:Jenis/:pesanan/:jumlah' ,(req,res) =>{

    var nama =req.params.Nama;
    var tanggal = req.params.Tanggal;
    var jenis = req.params.Jenis;
    var pesanan = req.params.pesanan;
    var jumlah = req.params.jumlah;

    if (jenis == 'minuman') {
        if (pesanan == 'Air mineral') {
       var harga = 10000;
    } else if (pesanan == 'Jus') {
       var harga = 20000;
    } else if (pesanan == 'Kopi') {
       var harga = 30000;
    } else {
        var harga = 'Pesen Nu Bener'
    }
    } else if (jenis == 'makanan') {
        if (pesanan == 'Nasi Goreng') {
        var harga = 20000;
    } else if (pesanan == 'Mie Goreng') {
        var harga = 30000;
    } else if (pesanan == 'Ayam Goreng') {
        var harga = 40000;
    } else {
        var harga = 'Pesen Nu Bener'
    }

    var total = jumlah * harga
    if (total >= 100000 ) {
        var diskon = total * 0.5
    } else {
        var diskon = 0
    }
    var total_pembayaran = total - diskon;

    res.send(
        'Nama Pembeli           : ' + nama + '<br>' +
        'Tangggal               : '  + tanggal + '<br>' +
        'Jenis                  : ' + jenis + '<br>' +
        'Pesanan                : ' + pesanan + '<br>' +
        'Harga                  : ' + harga + '<br>' +
        'Jumlah                 : ' + jumlah + '<br>' + 
        '-----------------------------------------' + '<br>'+
        'Total                  : ' + total + '<br>' + 
        'Diskon                 : ' + diskon + '<br>' + 
        'Total Pembayaran       : ' + total_pembayaran 
     )
}});
router.get('/sample', (req,res) => {
    
    res.send(
        '<h3>Selamat Datang</h3>'
    )
});

//export default router
export default router;