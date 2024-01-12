import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from './auth.service';
import { z } from 'zod';
import { EventEmitter, Injectable } from '@angular/core';
import { map, Observable, tap } from 'rxjs';
import {environment} from "../../environments/environment.development";


const API_URL = environment.API_URL;

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  lessonCreated = new EventEmitter<void>();

  constructor(private http: HttpClient, private authService: AuthService) {}

  PostLogin(payload: { username: string; password: string }) {
    return this.http.post(`${API_URL}/auth/login`, payload).pipe(
      map((data) => {
        return z
          .object({
            payload: z.object({
              token: z.string(),
            }),
          })
          .parse(data);
      }),
      tap((data) => {
        this.authService.setToken(data.payload.token);
      })
    );
  }

  // getPostById(uuid: string): Observable<any> {
  //   let token = this.authService.getToken();
  //   const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
  //   return this.http.get(`${API_URL}/posts/${uuid}`, { headers: headers }).pipe(
  //     map((data) => {
  //       const parsed = z
  //         .object({
  //           payload: z.object({
  //             id: z.string(),
  //             name: z.string(),
  //             body: z.string(),
  //           }),
  //         })
  //         .parse(data);
  //       return parsed.payload;
  //     })
  //   );
  // }





  // getLessonById(uuid: string) {
  //   let token = this.authService.getToken();
  //   const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
  //   return this.http
  //     .get(`${API_URL}/lesson/${uuid}`, { headers: headers })
  //     .pipe(
  //       map((data) => {
  //         const parsed = z
  //           .object({
  //             payload: z.object({
  //               name: z.string(),
  //               lessonDate: z.string(),
  //               techniques: z.array(
  //                 z.object({
  //                   id: z.string(),
  //                   japaneseName: z.string(),
  //                   englishName: z.string(),
  //                   category: z.string(),
  //                   description: z.string(),
  //                   orderId: z.number(),
  //                 })
  //               ),
  //             }),
  //           })
  //           .parse(data);
  //         return {
  //           ...parsed.payload,
  //           lessonDate: new Date(parsed.payload.lessonDate),
  //         };
  //       })
  //     );
  // }

  // getUsersFromLessonById(lessonId: string) {
  //   let token = this.authService.getToken();
  //   const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
  //   return this.http
  //     .get(`${API_URL}/lesson/${lessonId}`, { headers: headers })
  //     .pipe(
  //       map((data) => {
  //         const validatedData = z
  //           .object({
  //             payload: z.object({
  //               students: z.array(
  //                 z.object({
  //                   id: z.string(),
  //                   username: z.string(),
  //                   role: z.string(),
  //                 })
  //               ),
  //             }),
  //           })
  //           .parse(data);
  //
  //         return validatedData.payload.students.map(
  //           ({ id, username, role }) => ({ id, username, role })
  //         );
  //       })
  //     );
  // }

  // getAllUsers(): Observable<User[]> {
  //   let token = this.authService.getToken();
  //   const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
  //   return this.http.get(`${API_URL}/user`, { headers: headers }).pipe(
  //     map((data) => {
  //       const validatedData = z
  //         .object({
  //           payload: z.array(
  //             z.object({
  //               id: z.string(),
  //               username: z.string(),
  //               role: z.string(),
  //               rankName: z.string(),
  //             })
  //           ),
  //           message: z.string().nullable(),
  //         })
  //         .parse(data);
  //
  //       return validatedData.payload;
  //     })
  //   );
  // }

  // getAllRanks() {
  //   let token = this.authService.getToken();
  //   const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
  //   return this.http.get(`${API_URL}/ranks`, { headers: headers }).pipe(
  //     map((data) => {
  //       const validatedData = z
  //         .object({
  //           payload: z.array(
  //             z.object({
  //               id: z.string(),
  //               rankName: z.string(),
  //               orderId: z.number(),
  //             })
  //           ),
  //           message: z.string().nullable(),
  //         })
  //         .parse(data);
  //
  //       return validatedData.payload;
  //     })
  //   );
  // }

  // createUser(payload: {
  //   username: string;
  //   password: string;
  //   role: string;
  //   rank: string;
  // }) {
  //   let token = this.authService.getToken();
  //   const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
  //
  //   return this.http.post(`${API_URL}/user`, payload, {
  //     headers: headers,
  //     observe: 'response',
  //   });
  // }
  //
  // addUserToLesson(userId: string, lessonId: string) {
  //   let token = this.authService.getToken();
  //   const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
  //   let body = { id: userId };
  //
  //   return this.http.post(`${API_URL}/lesson/` + lessonId + '/user', body, {
  //     headers: headers,
  //   });
  // }

  // createLesson(lesson: LessonCreateModel) {
  //   let token = this.authService.getToken();
  //   const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
  //   return this.http
  //     .post(`${API_URL}/lesson`, lesson, {
  //       headers: headers,
  //       observe: 'response',
  //     })
  //     .pipe(
  //       tap(() => {
  //         this.lessonCreated.emit();
  //       })
  //     );
  // }

  // getCurriculums() {
  //   let token = this.authService.getToken();
  //   const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
  //   return this.http.get(`${API_URL}/curriculum`, { headers: headers }).pipe(
  //     map((data: any) => {
  //       return z
  //         .object({
  //           payload: z.array(
  //             z.object({
  //               id: z.string().nullable(),
  //               rank: z.object({
  //                 rankName: z.string().nullable(),
  //               }),
  //               techniques: z.array(
  //                 z.object({
  //                   id: z.string().nullable(),
  //                   englishName: z.string().nullable(),
  //                   japaneseName: z.string().nullable(),
  //                   category: z.string().nullable(),
  //                   description: z.string().nullable(),
  //                 })
  //               ),
  //             })
  //           ),
  //         })
  //         .parse(data).payload;
  //     })
  //   );
  // }

  getProducts() {
    let token = this.authService.getToken();
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get(`${API_URL}/products`, {headers: headers}).pipe(
      map((data) => {
        const productSchema = z.object({
          id: z.number(),
          name: z.string(),
          price: z.number(),
          stock: z.number(),
          description: z.string(),
          imageUri: z.string(),
          category: z.object({
            id: z.number(),
            name: z.string(),
            description: z.string(),
          })
        })
      }))
  }


}