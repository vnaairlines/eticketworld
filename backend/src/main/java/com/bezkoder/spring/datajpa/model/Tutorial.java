package com.bezkoder.spring.datajpa.model;

import javax.persistence.*;
import com.bezkoder.spring.datajpa.logic.Eticket;

@Entity
@Table(name = "tutorials")
public class Tutorial {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id;

	@Column(name = "title")
	private String title;

	@Column(name = "description")
	private String description;

	@Column(name = "published")
	private boolean published;


	@Column(name = "trainno")
	private String trainno;

	@Column(name = "fromcity")
	private String fromcity;

	@Column(name = "tocity")
	private String tocity;

	@Column(name = "eticketno")
	private Integer eticketno;

	public Tutorial() {

	}

	public Tutorial(String title, String description, boolean published, String trainno, String fromcity, String tocity, Integer eticketno) {
		this.title = title;
		this.description = description;
		this.published = published;
		this.trainno = trainno;
		this.fromcity = fromcity;
		this.tocity = tocity;
		this.eticketno = eticketno;
	}

	public long getId() {
		return id;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getTrainno() {
		return trainno;
	}

	public void setTrainno(String trainno) {
		this.trainno = trainno;
	}

	public String getFromcity() {
		return fromcity;
	}

	public void setFromcity(String fromcity) {
		this.fromcity = fromcity;
	}

	public Integer getEticketno() {
		return eticketno;
	}

	public void setEticketno(Integer eticketno) {
		this.eticketno = eticketno;
	}

	/*public int getEticket() {
		int eticketno = new Eticket().getEticketno();
		System.out.println("getEticket: " + eticketno);
		return eticketno;
	}*/

	public String getTocity() {
		return tocity;
	}

	public void setTocity(String tocity) {
		this.tocity = tocity;
	}

	public boolean isPublished() {
		return published;
	}

	public void setPublished(boolean isPublished) {
		this.published = isPublished;
	}

	@Override
	public String toString() {
		return "Tutorial [id=" + id + ", title=" + title + ", desc=" + description + ", published=" + published + ", trainno=" + trainno + ", fromcity=" + fromcity + ", tocity=" + tocity + ", eticketno=" + eticketno;
	}

}
