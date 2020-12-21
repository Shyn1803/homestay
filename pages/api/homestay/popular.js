export default (req, res) => {
  res.statusCode = 200
  res.json({
    status: 'success',
    data: [{
      name: 'Green Garden Homestay',
      location: 'Cần Thơ, Việt Nam',
      banner: 'https://drive.google.com/file/d/1mN_lXQApVQ8EPYW45Id9BWpjCcoBkXad/view?usp=sharing',
      space: 'Nhà riêng',
      shortDescription: 'Lorem Ipsum is simply dummy text of the printing and spacesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever',
      rating: 3.5,
      guests: 6,
      bedrooms: 3,
      showerRooms: 2,
    },
    {
      name: 'Vung Tau Milan',
      location: 'Bà Rịa Vũng Tàu, Vũng Tàu, Việt Nam',
      banner: 'https://drive.google.com/file/d/1H8xPrQ8Y7kvU6u_HpjSh6x4nNxBeU11A/view?usp=sharing',
      space: 'Căn hộ chung cư',
      shortDescription: 'Lorem Ipsum is simply dummy text of the printing and spacesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever',
      rating: 3.5,
      guests: 5,
      bedrooms: 2,
      showerRooms: 2,
    },
    {
      name: 'Resort Garden House',
      location: 'Hà Đông, Hà Nội, Việt Nam',
      banner: 'https://drive.google.com/file/d/1tFLiJhIxhM3vtzLVnfTjszyRp-uPNXLq/view?usp=sharing',
      space: 'Biệt thự',
      shortDescription: 'Lorem Ipsum is simply dummy text of the printing and spacesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever',
      rating: 3.5,
      guests: 8,
      bedrooms: 4,
      showerRooms: 4,
    },
    {
      name: 'Alex\'s Cozy Vintage',
      location: 'Hoàn Kiếm. Hà Nội, Việt Nam',
      banner: 'https://drive.google.com/file/d/1tFLiJhIxhM3vtzLVnfTjszyRp-uPNXLq/view?usp=sharing',
      space: 'Nhà riêng',
      shortDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever',
      rating: 3.5,
      guests: 2,
      bedrooms: 1,
      showerRooms: 1,
    }]
  })
}
