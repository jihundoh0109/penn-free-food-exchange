import { getMeadows, getMeadowById } from "../repository/meadow";

export async function getMeadowsService() {
  try {
    const meadows = await getMeadows();
    if (meadows.length === 0) {
      throw new NotFoundError("No meadows found");
    }
    return meadows;
  } catch (error) {
    throw new ServerError("ServerError");
  }
}

export async function getMeadowByIdService(meadowId: string) {
  try {
    const meadow = await getMeadowById(meadowId);
    if (!meadow) {
      throw new NotFoundError("No meadow found");
    }
    return meadow;
  } catch (error) {
    throw new ServerError("ServerError");
  }
}