import DataLoader from "dataloader";
import { CompanyEntity, UserEntity } from "./db/types.js";

export interface ResolverContext {
  companyLoader: DataLoader<string, CompanyEntity, string>;
  user?: UserEntity;
}
