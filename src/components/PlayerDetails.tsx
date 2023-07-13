import Modal from "./Modal";

const PlayerDetails = (props: {
  selectedPlayer: any;
  showSelectedPlayer: Boolean;
  handleClose: Function;
}) => {
  const { selectedPlayer, showSelectedPlayer, handleClose } = props;
  return (
    <>
      {showSelectedPlayer && (
        <Modal handleClose={handleClose}>
          <div className="p-5 min-w-[320px]">
            <h2 className="text-xl font-bold">{selectedPlayer.name}</h2>
            <div className="my-4">
              DRIVER: <div className="text-xl">{selectedPlayer.driver}</div>
            </div>
            <div className="my-4">
              3 WOOD: <div className="text-xl"></div>
            </div>
            <div className="my-4">5 WOOD: </div>
            <div className="my-4">IRONS: </div>
            <div className="my-4">WEDGES: </div>
            <div className="my-4">PUTTER: </div>
            <div className="my-4">BALL: </div>
          </div>
        </Modal>
      )}
    </>
  );
};

export default PlayerDetails;
