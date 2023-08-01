import express  from "express";
import {isAdmin, requireSignIn} from './../middlewares/authMiddleware.js'
import { categoryController, createCategoryController, deleteCategoryCOntroller, singleCategoryController, updateCategoryController } from './../controllers/categoryController.js';






const router = express.Router()


//all route
//create category


router.post(
    "/create-category",
     requireSignIn,
     isAdmin, 
     createCategoryController
   );


   //upadate category
   router.put('/update-category/:id', 
   requireSignIn,
   isAdmin, 
   updateCategoryController
   )

   //getAll category
   router.get('/get-category',categoryController)

   //single category
   router.get('/single-category/:slug', singleCategoryController)

//delete category
router.delete(
    "/delete-category/:id",
    requireSignIn,
    isAdmin,
    deleteCategoryCOntroller
  );

export default router 