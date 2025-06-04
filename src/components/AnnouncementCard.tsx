export default function AnnouncementCard() {
  const myImage = 'https://i.pinimg.com/736x/1b/93/9b/1b939bf10e7c437b01c8eac67a941c84.jpg';

  return (
    <>
      <div className="flex flex-col max-w-[50vw] mx-auto mt-10 gap-5 bg-black text-white text-[12px]">
        <div className="flex flex-col gap-2 bg-[#16202a] p-4">
          <div className="flex justify-between items-center">
            <div className="flex gap-1 items-center">
              <div>
                <i>profile pic</i>
              </div>
              <div>
                <h4>User Lastname</h4>
                <p>2h</p>
              </div>
            </div>
            <div>
              <i>3dots</i>
            </div>
          </div>
          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas consectetur architecto molestias, minima
              porro molestiae iusto iure cumque? Explicabo optio deserunt distinctio architecto ab perferendis,
              molestias soluta rem vitae amet dolorum cum iusto veritatis ea reiciendis vel, quam voluptate excepturi.
            </p>
          </div>
          <div>
            <img src={myImage} alt="My Image" />
          </div>
          <div className="flex justify-between">
            <div className="flex gap-1">
              <p>24</p>
              <p>j'aime</p>
            </div>
            <div className="flex gap-1">
              <p>5</p>
              <p>commentaires</p>
            </div>
          </div>
          <div className="flex justify-between">
            <div className="flex gap-1">
              <i>heart</i>
              <p>J'aime</p>
            </div>
            <div className="flex gap-1">
              <i>message</i>
              <p>Commenter</p>
            </div>
            <div className="flex gap-1">
              <i>paper-plane</i>
              <p>Partager</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2 bg-[#16202a] p-4">
          <div className="flex justify-between items-center">
            <div className="flex gap-1 items-center">
              <div>
                <i>profile pic</i>
              </div>
              <div>
                <h4>User Lastname</h4>
                <p>2h</p>
              </div>
            </div>
            <div>
              <i>3dots</i>
            </div>
          </div>
          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas consectetur architecto molestias, minima
              porro molestiae iusto iure cumque? Explicabo optio deserunt distinctio architecto ab perferendis,
              molestias soluta rem vitae amet dolorum cum iusto veritatis ea reiciendis vel, quam voluptate excepturi.
            </p>
          </div>
          <div>
            <img src={myImage} alt="My Image" />
          </div>
          <div className="flex justify-between">
            <div className="flex gap-1">
              <p>24</p>
              <p>j'aime</p>
            </div>
            <div className="flex gap-1">
              <p>5</p>
              <p>commentaires</p>
            </div>
          </div>
          <div className="flex justify-between">
            <div className="flex gap-1">
              <i>heart</i>
              <p>J'aime</p>
            </div>
            <div className="flex gap-1">
              <i>message</i>
              <p>Commenter</p>
            </div>
            <div className="flex gap-1">
              <i>paper-plane</i>
              <p>Partager</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
