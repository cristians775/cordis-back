import UserRepository from "../Repositories/User.repository";
class UserCtrl {
  getUserById = async (req: any, res: any): Promise<void> => {
    try {
      const { id } = req.params;
      const data = await UserRepository.find(id);
      res.send(data);
    } catch (e) {}
  };
}

export default new UserCtrl();
