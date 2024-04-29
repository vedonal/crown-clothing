import CategoryDirectory from '../../components/CategoryDirectory/CategoryDirectory';

const Home = () => {

    const shopCategories = [
        {
          id: 1,
          title: 'Men',
          imgURL: 'https://images.unsplash.com/photo-1507680434567-5739c80be1ac?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        {
          id: 2,
          title: 'Women',
          imgURL: 'https://plus.unsplash.com/premium_photo-1689977492903-bd8d201af5bd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        {
          id: 3,
          title: 'Hats',
          imgURL: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        {
          id: 4,
          title: 'T-Shirt',
          imgURL: 'https://images.unsplash.com/photo-1523381294911-8d3cead13475?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        {
          id: 5,
          title: 'Dresses',
          imgURL: 'https://images.unsplash.com/photo-1653490344913-03783e66b6cd?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
      ]
    
    return (
        <CategoryDirectory categories={shopCategories} />
    )
}

export default Home;