function Profile({name ,id}) {  
    return (
        <>
      <img
        src={`https://picsum.photos/id/${id}/200/300`}
        alt="Katherine Johnson"
      />
      <h1>{name}</h1>
      </>
    )
  }

  export default Profile